
"use client";

import { Card } from "flowbite-react";

export default function Component({ el }) {
  return (
    <Card
      className="max-w-sm"
    >
      <img className="w-[300px] h-[200px] object-cover rounded" alt=""
        height="300"
        src={el.url}
        width="200" />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {el.name}
      </h5>
    </Card>
  );
}