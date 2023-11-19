'use client'
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

type Props = {
  title: string;
  number: number | string;
  info: string;
};

const Dropdown = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-[840px] border-b-[1px] mx-auto border-text cursor-pointer">
      <div
        className="group py-6 px-8 flex gap-8 align-center"
        onClick={toggle}
      >
        <span className="group-hover:text-gray-light text-2xl">{props.number}</span>
        <div className="flex-1 transition-all overflow-hidden">
          <h4 className="group-hover:text-gray-light text-2xl uppercase">{props.title}</h4>
          <div
            ref={contentRef}
            style={{ maxHeight: `${maxHeight}px` }}
            className={`transition-opacity ${
              isOpen ? 'opacity-100 my-6' : 'opacity-0'
            }`}
          >{props.info}</div>
        </div>
        <div className="grid transition align-start">
          <Image
            src="/images/down.png"
            alt="Open"
            width={32}
            height={9}
            className={`group-hover:opacity-70 transition transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
