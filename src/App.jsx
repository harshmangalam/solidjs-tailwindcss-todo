import { createEffect, createSignal, For } from "solid-js";
import { createStore } from "solid-js/store";
import Navbar from "./components/Navbar";
import InputField from "./components/InputField";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";

function App() {
  const [store, setStore] = createStore({
    todos: [],
  });

  const [text, setText] = createSignal("");

  createEffect(() =>
    console.log(
      store.todos.map((s) => ({ text: s.text, completed: s.completed }))
    )
  );

  return (
    <div class="min-h-screen flex flex-col justify-between space-y-4">
      <header>
        <Navbar />
      </header>
      <main class="container md:max-w-lg mx-auto flex-grow">
        <section class=" flex items-center space-x-2 bg-purple-100 px-2 md:px-4 py-6">
          <InputField
            value={text()}
            onInput={(e) => setText(e.currentTarget.value)}
          />
          <Button
            bg="purple"
            class="flex items-center space-x-1"
            onClick={() => {
              setStore({
                todos: [
                  ...store.todos,
                  {
                    text: text(),
                    completed: false,
                  },
                ],
              });
              setText("");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span>Add</span>
          </Button>
        </section>

        <section class="py-4 grid grid-cols-1 gap-2">
          <For each={store.todos}>
            {(todo, i) => {
              const { completed, text } = todo;

              return (
                <div class="flex items-center space-x-2 bg-green-100 px-2 md:px-4 py-4">
                  <CheckBox
                    checked={completed}
                    onChange={(e) =>
                      setStore("todos", i(), { completed: e.target.checked })
                    }
                  />
                  <InputField
                    value={text}
                    onInput={(e) =>
                      setStore("todos", i(), { text: e.currentTarget.value })
                    }
                  />
                  <Button
                    bg="red"
                    class="flex items-center space-x-1"
                    onClick={() =>
                      setStore("todos", (t) => [
                        ...t.slice(0, i()),
                        ...t.slice(i() + 1),
                      ])
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </Button>
                </div>
              );
            }}
          </For>
        </section>
      </main>
      <footer class="py-2 bg-gray-100">
        <p class="text-center">SolidJs Todo - {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
