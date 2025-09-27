import Container from "./Container";

const CountBox = ({ data }) => {
  
  const inProgressData = data.filter((element) => element.status === "In-progress");
  const resolvedData = data.filter((element) => element.status === "Resolved");

  return (
    <Container>
      <div className="grid grid-cols-2 gap-[20px] my-[50px]">
        
        <div className="rounded-md p-7 text-white h-[250px] bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center justify-center">
          <h2 className="font-bold text-[35px]">In-progress</h2>
         
          <p className="font-semibold text-[26px]">{inProgressData.length}</p>
        </div>

        
        <div className="rounded-md p-7 text-white h-[250px] bg-gradient-to-r from-green-500 to-teal-500 flex flex-col items-center justify-center">
          <h2 className="font-bold text-[35px]">Resolved</h2>
          
          <p className="font-semibold text-[26px]">{resolvedData.length}</p>
        </div>
      </div>
    </Container>
  );
};

export default CountBox;