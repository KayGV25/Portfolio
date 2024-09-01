import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

export default function Project({pName, role, description, time, links = []}){
    const [open, setOpen] = useState(false)
    function handleOpen(){
        setOpen( prev => !prev)
    }
    return(
        <>
            <div className="px-4 py-4 border-r-2 border-current dark:hover:bg-zinc-800 hover:bg-zinc-100 cursor-pointer rounded-l-sm flex flex-col gap-1" onClick={handleOpen}>
                <h1 className="text-2xl font-bold text">{pName}</h1>
                <p className="text-xs">{time}</p>
                <p className="text-lg font-semibold">{role}</p>
                <p className="text-sm">{description}</p>
            </div>
            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-zinc-800 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                {pName} - Links
                            </DialogTitle>
                            <div className="mt-2 flex flex-col gap-1">
                                {
                                    links.map((link, key) => {
                                        return <a key={key} href={link} target="_blank" className="text-sm text-zinc-800 cursor-poimter hover:underline">{link}</a>
                                    })
                                }
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                            type="button"
                            data-autofocus
                            onClick={() => setOpen(false)}
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-zinc-800 hover:bg-zinc-50 hover:text-zinc-800 sm:mt-0 sm:w-auto"
                        >
                            Close
                        </button>
                        </div>
                    </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}