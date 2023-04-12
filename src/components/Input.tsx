import * as React from 'react';

type InputProps = {
  label?: string;
  id?: string;
  type?: string;
  className?: string;
  maxLength?: number;
};

export function Input({ label, id, type, className, maxLength }: InputProps) {
  return (
    <div className={`flex w-full flex-col ${className}`}>
      <label htmlFor={id} className='mb-3 font-medium'>
        {label}
      </label>
      <input
        type={type}
        id={id}
        maxLength={maxLength}
        className='rounded-xl border border-[#BBB9B9] duration-300 ease-in-out focus:ring-2 focus:ring-black'
      />
    </div>
  );
}

type TextareaProps = {
  label?: string;
  id: string;
  rows: number;
  className?: string;
};

export function Textarea({ label, id, rows, className }: TextareaProps) {
  return (
    <div className={`flex w-full flex-col ${className}`}>
      <label htmlFor={id} className='mb-3 font-medium'>
        {label}
      </label>
      <div className='relative'>
        <textarea
          name={id}
          id={id}
          rows={rows}
          // disabled={true}
          className='box-border h-full w-full resize-none rounded-xl border border-[#BBB9B9] duration-300 ease-in-out focus:ring-2 focus:ring-black'
        ></textarea>
        {/* <button
          className='absolute top-0 right-0 w-fit bg-none py-2 px-3 text-sm'
          onClick={(e) => {
            e.preventDefault()
            document[formName][id].focus()
          }}
        >
          Edit
        </button> */}
      </div>
    </div>
  );
}

type SelectButtonProps = {
  label?: string;
  id: string;
  className?: string;
  list: string[];
};

export function SelectButton({
  label,
  id,
  className,
  list,
}: SelectButtonProps) {
  const [selected, setSelected] = React.useState<number>(0);
  return (
    <div className={`flex w-full flex-col ${className}`}>
      <label htmlFor={id} className='mb-3 font-medium'>
        {label}
      </label>
      <div className='flex gap-2 md:gap-5'>
        {list.map((item, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.preventDefault();
              setSelected(idx);
            }}
            className={
              selected === idx
                ? 'rounded-xl bg-black px-4 py-2 text-white'
                : 'rounded-xl bg-[#DADAE7]  px-4 py-2 text-black'
            }
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

type RadioProps = {
  label?: string;
  id: string;
  className?: string;
  value: string[];
  description: string[];
};

export function Radio({
  label,
  id,
  className,
  value,
  description,
}: RadioProps) {
  return (
    <div className={`flex w-full flex-col ${className}`}>
      <label htmlFor={id} className='mb-1 font-medium'>
        {label}
      </label>
      <div className='flex flex-col'>
        {value.map((item, idx) => (
          <div
            key={idx}
            className='flex items-center gap-3 border-b border-black py-2'
          >
            <input
              type='radio'
              id={id + idx.toString()}
              name={id}
              value={item}
            />
            <label
              htmlFor={id + idx.toString()}
              className='flex w-full justify-between'
            >
              <p>{item}</p>
              <p>{description[idx]}</p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
