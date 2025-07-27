export function Tabs(props) {
  const { todos, selectedTab, setSelectedTab } = props;
  const tabs = ["All", "Open", "Completed"];


  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((todo) => !todo.complete).length
            : todos.filter((todo) => todo.complete).length;

        return (
          <button
            key={tabIndex}
            className={
              "tab-button " + (tab === selectedTab ? "tab-selected" : "")
            }
            onClick={() => {
              setSelectedTab(tab);
              console.log(selectedTab);
            }}
          >
            <h4>
              {tab}
              <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
}
