import AppLayout from "./components/layouts/AppLayout";
import AppRoutes from "./routes/AppRoutes";

const App = (): JSX.Element => {
  return (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  );
};

export default App;
