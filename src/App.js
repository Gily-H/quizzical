import StartPage from "./components/StartPage";
import QuizPage from "./components/QuizPage";
import useStart from "./hooks/useStart";
import useFetch from "./hooks/useFetch";
import "./styles/app.css";

export default function App() {
  const [gameStart, setGameStart] = useStart(false);
  const baseUrl = "https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple";
  const questions = useFetch(baseUrl);

  return (
    <main className="main-container">
      {gameStart ? (
        <QuizPage questions={questions} />
      ) : (
        <StartPage startGameHandler={setGameStart} />
      )}
    </main>
  );
}
