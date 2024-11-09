function App() {
  return (
    <div>
      <PostComponent></PostComponent>
    </div>
  );
}
const style1 = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
};
function PostComponent() {
  return (
    <div style={style1}>
      <img
        src={
          "https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
        }
        style={{ width: 20, height: 20, borderRadius: 20 }}
      />
    </div>
  );
}
export default App;
