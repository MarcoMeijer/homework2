"use client";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

export default function RouteButton() {
  const router = useRouter();

  return (
    <Button
      title="Click me"
      onClick={() => {
        router.push("/post/clicked");
      }}
    />
  );
}
