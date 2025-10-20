'use client'
import React, { JSX, useState } from "react";
import {
    DndContext,
    PointerSensor,
    useSensor,
    useSensors,
    closestCenter,
    DragOverlay,
    DragStartEvent,
    DragOverEvent,
    DragEndEvent,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    useSortable,
    rectSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { EllipsisVertical } from "lucide-react";
import Footer from "@/components/footer";

// ---------------------------
// Types
// ---------------------------
type Assignee = { name: string; avatar: string };

type Task = {
    id: number;
    title: string;
    priority: "Low" | "Medium" | "High";
    description?: string;
    dueDate?: string; // YYYY-MM-DD
    assignees?: Assignee[];
    completed: boolean;
};

type Column = {
    id: string;
    title: string;
    tasks: Task[];
};


const initialColumns: Column[] = [
    {
        id: "upcoming",
        title: "Upcoming",
        tasks: [
            {
                id: 1,
                title: "Plan user onboarding flow",
                priority: "High",
                description: "Design a seamless onboarding process to improve user activation rate.",
                dueDate: "2025-11-15",
                assignees: [{ name: "Liam Carter", avatar: "https://randomuser.me/api/portraits/men/20.jpg" }],
                completed: false,
            },
            {
                id: 2,
                title: "Set up CI/CD pipeline",
                priority: "Medium",
                description: "Implement GitHub Actions for automated build and deployment.",
                dueDate: "2025-11-10",
                assignees: [{ name: "Sophia Lee", avatar: "https://randomuser.me/api/portraits/women/30.jpg" }],
                completed: false,
            },
        ],
    },
    {
        id: "in-progress",
        title: "In Progress",
        tasks: [
            {
                id: 3,
                title: "Set up user authentication",
                priority: "Medium",
                description: "Integrate user authentication using OAuth 2.0 for secure login functionality.",
                dueDate: "2025-09-18",
                assignees: [{ name: "Ava Johnson", avatar: "https://randomuser.me/api/portraits/women/45.jpg" }],
                completed: false,
            },
            {
                id: 4,
                title: "Design the user dashboard",
                priority: "High",
                description: "Design a clean and interactive user dashboard for easy navigation and data visualization.",
                dueDate: "2025-10-30",
                assignees: [
                    { name: "Liam Carter", avatar: "https://randomuser.me/api/portraits/men/21.jpg" },
                    { name: "Sophia Lee", avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
                ],
                completed: false,
            },
            {
                id: 5,
                title: "Implement notifications system",
                priority: "Medium",
                description: "Develop a real-time notification system for user activity using WebSocket.",
                dueDate: "2025-11-05",
                assignees: [{ name: "Oliver Brown", avatar: "https://randomuser.me/api/portraits/men/19.jpg" }],
                completed: false,
            },
        ],
    },
    {
        id: "in-review",
        title: "In Review",
        tasks: [
            {
                id: 6,
                title: "Set up tracking for user interactions",
                priority: "Low",
                description: "Implement tracking for user interactions on the website to analyze user behavior.",
                dueDate: "2025-09-18",
                assignees: [{ name: "Ethan Kim", avatar: "https://randomuser.me/api/portraits/men/37.jpg" }],
                completed: false,
            },
            {
                id: 7,
                title: "Design new project management interface",
                priority: "High",
                description: "Design and implement a clean and user-friendly interface for managing projects in the system.",
                dueDate: "2025-10-30",
                assignees: [
                    { name: "Noah Williams", avatar: "https://randomuser.me/api/portraits/men/52.jpg" },
                    { name: "Isabella Martin", avatar: "https://randomuser.me/api/portraits/women/29.jpg" },
                ],
                completed: false,
            },
            {
                id: 8,
                title: "Optimize API performance",
                priority: "High",
                description: "Refactor backend API endpoints to reduce response time and improve scalability.",
                dueDate: "2025-10-22",
                assignees: [{ name: "Mason Rivera", avatar: "https://randomuser.me/api/portraits/men/12.jpg" }],
                completed: false,
            },
        ],
    },
    {
        id: "completed",
        title: "Completed",
        tasks: [
            {
                id: 9,
                title: "Brand logo design",
                priority: "Low",
                description: "Various versions have evolved over the years, sometimes by accident.",
                dueDate: "2025-06-13",
                assignees: [{ name: "Emma Davis", avatar: "https://randomuser.me/api/portraits/women/24.jpg" }],
                completed: true,
            },
            {
                id: 10,
                title: "Improve animation loader",
                priority: "Medium",
                description: "A handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
                dueDate: "2025-10-16",
                assignees: [
                    { name: "Lucas Garcia", avatar: "https://randomuser.me/api/portraits/men/60.jpg" },
                    { name: "Mia Clark", avatar: "https://randomuser.me/api/portraits/women/38.jpg" },
                ],
                completed: true,
            },
            {
                id: 11,
                title: "Deploy landing page",
                priority: "Medium",
                description: "Launch the product landing page with responsive design and SEO optimization.",
                dueDate: "2025-09-01",
                assignees: [{ name: "Henry Wilson", avatar: "https://randomuser.me/api/portraits/men/66.jpg" }],
                completed: true,
            },
        ],
    },
];


export default function KanbanPage(): JSX.Element {
    const [columns, setColumns] = useState<Column[]>(initialColumns);
    const [activeId, setActiveId] = useState<string | null>(null);

    const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }));

    const findColumnByTaskId = (taskId: string) => columns.find((c) => c.tasks.some((t) => `task-${t.id}` === taskId));

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as string);
    };

    const handleDragOver = (event: DragOverEvent) => {
        const { active, over } = event;
        if (!over) return;

        const activeId = active.id as string;
        const overId = over.id as string;

        // if dragging a task over another task or column
        const fromCol = findColumnByTaskId(activeId);
        const toCol = findColumnByTaskId(overId) || columns.find((c) => `column-${c.id}` === overId);

        if (!fromCol || !toCol) return;
        if (fromCol.id === toCol.id) return;

        // remove from source and add to destination at the end
        setColumns((prev) => {
            const source = prev.find((c) => c.id === fromCol.id)!;
            const destination = prev.find((c) => c.id === toCol.id)!;
            const taskIndex = source.tasks.findIndex((t) => `task-${t.id}` === activeId);
            if (taskIndex === -1) return prev;

            const task = source.tasks[taskIndex];
            const newSourceTasks = [...source.tasks];
            newSourceTasks.splice(taskIndex, 1);
            const newDestinationTasks = [...destination.tasks, task];

            return prev.map((c) => {
                if (c.id === source.id) return { ...c, tasks: newSourceTasks };
                if (c.id === destination.id) return { ...c, tasks: newDestinationTasks };
                return c;
            });
        });
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        setActiveId(null);
        if (!over) return;

        const activeId = active.id as string;
        const overId = over.id as string;

        const fromCol = findColumnByTaskId(activeId);
        const toCol = findColumnByTaskId(overId) || columns.find((c) => `column-${c.id}` === overId);

        if (!fromCol || !toCol) return;

        // if dropped in same column and over a task -> reorder
        if (fromCol.id === toCol.id && overId.startsWith("task-")) {
            const colIndex = columns.findIndex((c) => c.id === fromCol.id);
            const oldIndex = fromCol.tasks.findIndex((t) => `task-${t.id}` === activeId);
            const newIndex = fromCol.tasks.findIndex((t) => `task-${t.id}` === overId);
            if (oldIndex === -1 || newIndex === -1) return;
            setColumns((prev) => {
                const updated = [...prev];
                const col = updated[colIndex];
                col.tasks = arrayMove(col.tasks, oldIndex, newIndex);
                updated[colIndex] = col;
                return updated;
            });
            return;
        }

        // moved between different columns and dropped over a task -> insert at that index
        if (fromCol.id !== toCol.id) {
            setColumns((prev) => {
                const srcIndex = prev.findIndex((c) => c.id === fromCol.id);
                const dstIndex = prev.findIndex((c) => c.id === toCol.id);
                const src = prev[srcIndex];
                const dst = prev[dstIndex];

                const task = src.tasks.find((t) => `task-${t.id}` === activeId);
                if (!task) return prev;

                const newSrcTasks = src.tasks.filter((t) => `task-${t.id}` !== activeId);
                // if over a task, insert before that task
                let insertAt = dst.tasks.length;
                if (overId.startsWith("task-")) {
                    const idx = dst.tasks.findIndex((t) => `task-${t.id}` === overId);
                    if (idx !== -1) insertAt = idx;
                }

                const newDstTasks = [...dst.tasks.slice(0, insertAt), task, ...dst.tasks.slice(insertAt)];

                return prev.map((c) => {
                    if (c.id === src.id) return { ...c, tasks: newSrcTasks };
                    if (c.id === dst.id) return { ...c, tasks: newDstTasks };
                    return c;
                });
            });
        }
    };

    return (
        <>
            <div className="ltr mx-8 py-8 ">
                <div className="">
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragStart={handleDragStart}
                        onDragOver={handleDragOver}
                        onDragEnd={handleDragEnd}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {columns.map((col) => (
                                <Column key={col.id} column={col} />
                            ))}
                        </div>

                        <DragOverlay>{activeId ? <OverlayCard id={activeId} columns={columns} /> : null}</DragOverlay>
                    </DndContext>
                    <footer className="mt-3 text-xs text-gray-500 dark:text-gray-300">Tip: hold, drag and drop </footer>
                </div>
            </div>
            <Footer />
        </>
    );
}


function Column({ column }: { column: Column }) {
    const items = column.tasks.map((t) => `task-${t.id}`);

    return (
        <div className="relative">
                <div className="bg-white dark:bg-slate-950 p-4 w-full absolute left-0 bottom-0">
                <button className="bg-sky-600 text-white w-full py-2.5 rounded-md">
                    Add New +
                </button>
            </div>
            <div className="bg-white dark:bg-slate-950 rounded-lg p-4 mb-10 shadow-md border h-[75vh] overflow-y-auto dark:border-slate-700 border-gray-100">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg text-gray-800 dark:text-white font-semibold">{column.title}</h3>
                    <span className="text-gray-500 dark:text-gray-300" ><EllipsisVertical /></span>
                </div>
                <SortableContext items={items} strategy={rectSortingStrategy}>
                    <div className="flex flex-col overflow-hidden mb-6 gap-3">
                        {column.tasks.map((task) => (
                            <TaskCard key={task.id} task={task} />
                        ))}
                    </div>
                </SortableContext>
            </div>
        </div>
    );
}

function priorityColor(priority: Task["priority"]) {
    if (priority === "High") return "bg-red-100 text-red-700";
    if (priority === "Medium") return "bg-yellow-100 text-yellow-700";
    return "bg-green-100 text-green-700";
}

function TaskCard({ task }: { task: Task }) {
    const id = `task-${task.id}`;
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
    const style: React.CSSProperties = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.7 : 1,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="bg-white dark:bg-slate-800 dark:border-slate-700 border cursor-grab border-gray-100 rounded-md p-3 shadow-sm hover:shadow-md transition-shadow"
        >
            <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                    <h4 className="text-sm text-gray-800 dark:text-gray-200 font-bold">{task.title}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 ">{task.description}</p>

                    <div className="mt-3 flex items-center justify-between">
                        <div className="flex -space-x-2 items-center">
                            {task.assignees?.map((a, i) => (
                                <img key={i} src={a.avatar} alt={a.name} title={a.name} className="w-7 h-7 rounded-full border-2 border-white" />
                            ))}
                        </div>
                        <div className="flex items-center gap-2">
                            {task.dueDate && <span className="text-xs text-gray-400">{task.dueDate}</span>}
                            <span className={`text-xs px-2 py-0.5 rounded-full ${priorityColor(task.priority)}`}>{task.priority}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function OverlayCard({ id, columns }: { id: string; columns: Column[] }) {
    const tid = parseInt(id.replace("task-", ""), 10);
    const task = columns.flatMap((c) => c.tasks).find((t) => t.id === tid) as Task | undefined;
    if (!task) return null;

    return (
        <div className="w-64 bg-white rounded-lg p-3 shadow-2xl border border-gray-100">
            <h4 className="text-sm font-medium">{task.title}</h4>
            <p className="text-xs text-gray-500 mt-1">{task.description}</p>
            <div className="mt-3 flex items-center justify-between">
                <div className="flex -space-x-2">
                    {task.assignees?.map((a, i) => (
                        <img key={i} src={a.avatar} alt={a.name} title={a.name} className="w-6 h-6 rounded-full border-2 border-white" />
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    {task.dueDate && <span className="text-xs text-gray-400">{task.dueDate}</span>}
                    <span className={`text-xs px-2 py-0.5 rounded-full ${priorityColor(task.priority)}`}>{task.priority}</span>
                </div>
            </div>
        </div>

    );
}
