import { ChildrenInterface } from "@/interfaces/ChildrenInterface";

const Layout = ({ children }: ChildrenInterface) => {
  return (
    <div
      className={`page text-black relative font-grotesk text-lg font-normal`}
    >
      {/* <ParticlesContainer /> */}

      {/* <motion.div
          initial={{ y: 0 }}
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 10, -10, 0],
            transition: { duration: 3, repeat: Infinity },
          }}
          className=" h-[165px] w-[165px] xl:w-full xl:h-full max-w-[150px] xl:max-w-[200px] xl:max-h-[678px] absolute top-32 lg:top-36 left-36 xl:-bottom-40 xl:right-[200px]"
        >
          <RocketSMV />
        </motion.div> */}

      {/* <Nav /> */}
      {/* <Header /> */}
      <div className="my-auto">{children}</div>
    </div>
  );
};

export default Layout;
