import { Spinner } from "@heroui/react";

const loading = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-12">
        <Spinner size="xl" color="danger" />
      </div>
    </>
  );
};

export default loading;
