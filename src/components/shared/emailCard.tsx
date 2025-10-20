
import { Star, Zap } from "lucide-react";
import Image from "next/image";

interface Email {
    id: number,
    sender: {
        name: string,
        type: string,
        image: string
    },
    subject: string,
    preview: string,
    time: string,
    read: boolean
}

interface Props {
    email: Email
}

export default function EmailCard({ email }: Props) {

    const emailType = (type: string) => {
        switch (type) {
            case "person":
                return "text-green-500 bg-green-200"
            case "company":
                return "text-rose-500 bg-rose-200"
        }
    }

    return (
        <tr className="border-b border-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 dark:border-gray-500 transition">
       
        <td className="px-2 py-5">
          <input
            name="read"
            type="checkbox"
            className="w-5 h-5 rounded text-sky-500 bg-gray-100 border-gray-300 focus:ring-sky-500"
          />
        </td>
      
        <td className="px-2 py-5">
          {email.read ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={17}
              height={17}
            >
              <defs>
                {/* نکته: id یکتا برای جلوگیری از تداخل در map */}
                <linearGradient id={`goldGradient-${email.id}`} x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#FFD700" />
                  <stop offset="100%" stopColor="#FFA500" />
                </linearGradient>
              </defs>
              <path
                fill={`url(#goldGradient-${email.id})`}
                stroke="#E6B800"
                strokeWidth="0.5"
                d="M12 2l2.09 6.26L21 9.27l-4.91 4.27L17.82 21 12 17.77 6.18 21l1.73-7.46L3 9.27l6.91-1.01L12 2z"
              />
            </svg>
          ) : (
            <Star className="text-amber-300 h-4 w-4" />
          )}
        </td>
      
        {/* عکس فرستنده */}
        <td className="px-2 py-5">
          <Image
            className="rounded-full"
            width={30}
            height={30}
            src={email.sender.image}
            alt={email.sender.name}
          />
        </td>
      
        {/* اطلاعات ایمیل */}
        <td className="text-gray-800 dark:text-gray-300 font-sans">{email.sender.name}</td>
        <td className="text-gray-800 dark:text-gray-300">{email.subject}</td>
        <td className="text-gray-800 dark:text-gray-300 text-sm">{email.preview}</td>
        <td className="text-gray-800 dark:text-gray-300 text-xs">{email.time}</td>
      
        {/* نوع ایمیل */}
        <td className="text-start">
          <p
            className={`border flex justify-center items-center w-6 h-6 mx-1 rounded-full ${emailType(
              email.sender.type
            )}`}
          >
            <Zap className="h-4 w-3" />
          </p>
        </td>
      </tr>  
    )
}