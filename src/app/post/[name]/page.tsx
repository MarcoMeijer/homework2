import { Metadata } from "next";
import React from "react";

export interface PostProps {
  params: { name: string };
}

export function generateMetadata({ params }: PostProps): Metadata {
  return {
    title: params.name,
    description: `Post ${params.name}`,
  };
}

export default async function Page({ params }: PostProps) {
  return <p>{params.name}</p>;
}
