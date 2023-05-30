import { useState } from "react"
import { useAddPagesMutation } from "../../../redux/slices/bookApi";

export const AddPages = () => {
  const [pages, setPages] = useState(0)
  const [addPages] = useAddPagesMutation();

  const inputChange = (e) => {
    const { value } = e.target;
    setPages(Number(value));
  };

  const handleAddPages = async (e) => {
    e.preventDefault();
    console.log(pages);
    const payload = {
      pages: pages,
    }
    addPages(payload);
    setPages(0);
  };

  return (
    <div>
      ADD PAges
      <form onSubmit={handleAddPages}>
        <label>
          Read pages
          <input 
            type="text" 
            value={pages}
            required
            onChange={inputChange}
            />
        </label>
        <button type="submit">ADD Pages</button>
      </form>
    </div>
  )
}