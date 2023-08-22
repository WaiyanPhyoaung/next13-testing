'use client'

import Image from "next/image";
import { useState } from "react";

export type ReviewCardProps = {
  title: string;
  date: string;
  img: string;
  body: string;
};

export default function ReviewCard({
  title,
  date,
  img,
  body,
}: ReviewCardProps) {

  const [copied, setCopied] = useState(false)

  const handleClick = async() => {
    await navigator.clipboard.writeText(window.location.href)
    setCopied(prev => !prev)
    setTimeout(() => setCopied(false),3000)
  };

  return (
    <>
      <h2>{title}</h2>
      <div className="flex justify-center items-center">
        <p>{date}</p>
        <button onClick={handleClick} disabled={copied} className={`border-2 text-xl text-purple-500 hover:text-purple-900 p-4 ${copied && 'opacity-60'}`}>{copied ? "Copied Url" : "Share Url"}</button>
      </div>
      <Image src={img} alt="apple logo" width={200} height={200} priority />
      {body && (
        <article className="prose" dangerouslySetInnerHTML={{ __html: body }} />
      )}
    </>
  );
}
