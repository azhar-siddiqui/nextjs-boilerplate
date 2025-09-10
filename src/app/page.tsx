import Image from 'next/image';
import { Button } from '../components/ui/button';

export default function Home() {
  return (
    <>
      <Button size={'sm'}>Hello</Button>
      <Button>Hello</Button>
      <Button size={'lg'}>Hello</Button>
      <Button size={'icon'}>Hello</Button>
    </>
  );
}
