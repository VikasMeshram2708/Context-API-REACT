import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function SlamForm() {
  const [userData, setUserData] = useState({
    author: "",
    message: "",
    done: false,
  });
  const [slams, setSlams] = useState([]);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = useCallback(
    (event) => {
      event.preventDefault();
      console.log("user-data", userData);

      if (!userData?.author) return toast.error("Author is required");
      if (!userData?.message) return toast.error("Message is required");

      setSlams([
        ...slams,
        {
          id: Math.floor(1000 * Math.random() * 9000),
          name: userData?.author,
          content: userData?.message,
          done: userData?.done,
        },
      ]);

      setUserData((prev) => ({
        ...prev,
        author: "",
        message: "",
        done: "",
      }));

      console.log("user-data", userData);
    },
    [userData, slams]
  );

  const handleCheck = (slamId) => {
    setSlams(
      slams?.map((item) => {
        if (item?.id === slamId) {
          return {
            ...item,
            done: !item?.done,
          };
        }
        return item;
      })
    );
  };

  const handleDelete = (slamId) => {
    let storedSlams = slams?.filter((item) => item?.id !== slamId);
    setSlams(storedSlams);
  };

  useEffect(() => {}, [userData, slams]);
  return (
    <section className="max-w-md mx-auto">
      <form
        id="slamForm"
        onSubmit={handleSave}
        className="bg-slate-500 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-white text-sm font-bold mb-2"
          >
            Author Name
          </label>
          <input
            type="text"
            name="author"
            id="author"
            value={userData?.author}
            onChange={handleOnChange}
            placeholder="Enter author name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-white text-sm font-bold mb-2"
          >
            Message
          </label>
          <input
            type="text"
            name="message"
            id="message"
            value={userData?.message}
            onChange={handleOnChange}
            placeholder="Enter message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Slam
          </button>
        </div>
      </form>

      <ul className="flex flex-col gap-2">
        {slams?.map((item) => {
          return (
            <div
              className="bg-gray-500 flex justify-between gap-2 py-2 px-3 rounded-md"
              key={item?.id}
            >
              <div className={`flex items-center gap-2`}>
                <input
                  type="checkbox"
                  name="done"
                  id="done"
                  checked={userData?.checked}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      done: e.target.checked,
                    }))
                  }
                  onClick={() => handleCheck(item?.id)}
                />
                <p
                  id="userContent"
                  className={`${item?.done ? "line-through" : ""}`}
                >
                  {item?.content}
                </p>
                <h1>{item?.name}</h1>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="bg-green-500 text-white font-semibold text-sm p-2 rounded-lg"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item?.id)}
                  type="button"
                  className="bg-red-500 text-white font-semibold text-sm p-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </section>
  );
}
