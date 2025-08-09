import { Header } from '@/components/layout/Header/Header';

export const UIPage = () => {
  return (
    <div className="flex justify-around align-middle">
      <h2
        style={{ fontFamily: 'Cinzel' }}
        className="text-3xl font-semibold leading-1 grid place-items-center ">
        Time of Heroes
      </h2>

      <h1 className="text-3xl bg-gradient-to-br from-red-500 to-purple-600 bg-clip-text text-transparent">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum expedita necessitatibus
        aperiam perspiciatis laborum eum! Fuga, rerum blanditiis ab voluptates reiciendis deleniti
        atque incidunt tenetur! Voluptas, cupiditate error. Eaque, placeat!
      </h1>
      <div className="w-full h-[2px] bg-gradient-to-br from-red-500 to-purple-600"></div>
    </div>
  );
};
