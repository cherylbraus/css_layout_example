import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>My Title</h1>
      </header>

      <main>
        <div className="leftside">
          <div className="leftTop"></div>
          <div className="leftBottom">
            <div className="leftBottomTile"></div>
            <div className="leftBottomTile"></div>
            <div className="leftBottomTile"></div>
            <div className="leftBottomTile"></div>
            <div className="leftBottomTile"></div>
            <div className="leftBottomTile"></div>
            <div className="leftBottomTile"></div>
            <div className="leftBottomTile"></div>
            <div className="leftBottomTile"></div>
          </div>
        </div>
        <div className="rightside">
          <div className="rightTop"></div>
          <div className="rightBottom">
            <div className="rightBottomTile"></div>
            <div className="rightBottomTile"></div>
            <div className="rightBottomTile"></div>
            <div className="rightBottomTile"></div>
            <div className="rightBottomTile"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
