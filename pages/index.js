
function HomePage(props) {
  const { name, data } = props;
  
  return (
    <><p>Hello!!How are you ???{name}</p>
    </>
    
  );
 }

// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
//   const data = fs.readFileSync(filePath);
//   const parsedData = JSON.parse(data);
//   return {
//     props: {
//       name: "Md. Razun Mia",
//       data: parsedData,
//     },
//   };
//  }

export async function getServerSideProps(contex) {
  return {
    props: {
      name: "Md. Razun Mia"
    }
  }
}
export default HomePage;