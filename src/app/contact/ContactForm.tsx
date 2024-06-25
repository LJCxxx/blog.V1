'use client';

import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactForm() {
    const [name, setName] = useState<string>("");
    const [emailAddress, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const router = useRouter();

    const create = async (event: FormEvent) => {
        event.preventDefault(); // Prevent default form submission

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_CONTACT_API}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    emailAddress, // Ensure field names match your database schema
                    message,
                }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const result = await response.json();
            console.log(result); // Log the result for debugging

            // Clear the form fields
            setName("");
            setEmail("");
            setMessage("");

            // Refresh the router to reflect the changes
            router.refresh();
        } catch (error) {
            console.error('Failed to create contact:', error); // Log any errors
        }
    };

    return (
        <div className="mx-auto text-2xl">
            <form onSubmit={create}>
                <label>Name</label>
                <input
                    type="text"
                    className="border-2 border-black focus:outline-yellow-400 focus:shadow-lg w-full rounded-[7px] p-2.5 mb-7 mt-2"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                
                <label className="">Email</label>
                <input
                    type="text"
                    className="border-2 border-black focus:outline-yellow-400 focus:shadow-lg w-full rounded-[7px] p-2.5 mb-7 mt-2"
                    placeholder="johndoe@bitnetnode.bitnet"
                    value={emailAddress}
                    onChange={(e) => setEmail(e.target.value)}
                />
                
                <label>Message</label>
                <textarea
                    className="border-2 border-black focus:outline-yellow-400 focus:shadow-lg w-full rounded-[7px] min-h-[9em] max-h-[18em] p-2.5 mt-2"
                    placeholder="Hello World!"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className="rounded-[7px] bg-black text-white hover:bg-yellow-400 w-full my-7 uppercase py-2 text-sm" type="submit">
                    i want to reach out
                </button>
            </form>
        </div>
    );
}