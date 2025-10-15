'use client';

import Image from "next/image";

export default function AvatarSection() {
  return (
    <span className="flex items-center justify-center col-span-12 sm:col-span-3 row-span-2 rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800">
      <Image src="/avatar.jpg" alt="avatar" width={300} height={300} />
    </span>
  );
}
