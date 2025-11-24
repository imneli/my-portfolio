import Image from "next/image";

const NameLayer = () => {
  return (
    <>
      <div className="w-32 h-32 overflow-hidden relative mb-8 -mt-16">
        <Image
          src="/neli-icon.jpg"
          alt="Profile picture"
          fill
          className="object-cover"
        />
      </div>
      <h1 className="text-2xl font-bold mb-8 font-tech">
        Matheus Montovaneli
      </h1>
    </>
  );
};

export default NameLayer;
