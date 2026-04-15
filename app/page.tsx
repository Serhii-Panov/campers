'use client';
import { Button } from '@/components/Button';

export default function Home() {
  return (
    <div>
      <Button onClick={() => console.log("Click!")}>
        View Now
      </Button>
    </div>
  );
}