'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Forward, Reply } from 'lucide-react'

interface Props {
    setOpen: () => void,
    open: boolean
}

export default function Drawer({ setOpen, open }: Props) {


    return (
        <div>
            <Dialog open={open} onClose={setOpen} className="relative ltr z-50">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity duration-100 ease-in-out data-closed:opacity-0"
                />
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10 sm:pr-16">
                            <DialogPanel
                                transition
                                className="pointer-events-auto relative w-screen max-w-md transform transition duration-100 ease-in-out data-closed:-translate-x-full sm:duration-700"
                            >
                                <div className="relative flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl">
                                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                        <div className="space-y-4 border-b border-gray-300 pb-2">
                                            <h1 className="text-gray-800 border-b border-gray-300 pb-3 font-semibold text-lg">
                                                Your elite author Graphic Optimization reward is ready!
                                            </h1>

                                            <p className="text-gray-700">
                                                Hi <span className="font-medium text-gray-800">Coderthemes</span>!
                                            </p>

                                            <p className="text-gray-600">
                                                Clicking <span className="font-semibold">‘Order Service’</span> on the right-hand side of the above page
                                                will present you with an order page. This service has the following
                                                <span className="font-semibold"> Briefing Guidelines </span>
                                                that will need to be filled before placing your order:
                                            </p>

                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Your design preferences (Color, style, shapes, Fonts, others)</li>
                                                <li>Tell me, why is your item different?</li>
                                                <li>Do you want to bring up a specific feature of your item? If yes, please tell me.</li>
                                                <li>Do you have any preference or specific thing you would like to change or improve on your item page?</li>
                                                <li>
                                                    Do you want to include your item's or your provider's logo on the page?
                                                    If yes, please send it to me in vector format (Ai or EPS).
                                                </li>
                                                <li>Please provide me with the copy or text to display.</li>
                                            </ol>

                                            <p className="text-gray-600">
                                                Filling in this form with the above information will ensure that they will be able to start work quickly.
                                            </p>

                                            <p className="text-gray-600">
                                                You can complete your order by putting your coupon code into the
                                                <span className="font-medium text-gray-800"> Promotional code </span> box and clicking
                                                <span className="font-semibold"> ‘Apply Coupon’. </span>
                                            </p>

                                            <p className="text-gray-700">
                                                Best,<br />
                                                <span className="font-semibold text-gray-800">Graphic Studio</span>
                                            </p>
                                        </div>
                                        <div className='mt-2 flex items-center justify-start'>
                                            <button className='flex items-center justify-center bg-sky-500 rounded-md z-50 px-3 py-2 mr-1 cursor-pointer'>
                                                <Reply />
                                                reply
                                            </button>
                                            <button className='flex items-center justify-center bg-sky-500 rounded-md z-50 px-3 py-2 mx-1 cursor-pointer'>
                                                <Forward />
                                                forward

                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
