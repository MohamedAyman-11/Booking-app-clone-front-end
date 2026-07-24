import Router from './router';
import useCurrentUser from "./hooks/user/useCurrentUser.ts";
import LoadingSpinner from "./svg/LoadingSpinner.tsx";

function App() {
  const {isLoading} = useCurrentUser();
  if (isLoading) return <LoadingSpinner/>
  return (
    <>
      <Router/>
    </>
  );
}

export default App;
