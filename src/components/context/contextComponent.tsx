import { useTheme, ThemeProvider } from './context';

function ParentComponent() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
}

function Component() {
  const context = useTheme();
  console.log(context);

  return (
    <div className="">
      <h2>Context</h2>
      <button
        className="btn"
        onClick={() => {
          if (context.theme === 'dark') {
            context.setTheme('system');
            return;
          }
          context.setTheme('dark');
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ParentComponent;
