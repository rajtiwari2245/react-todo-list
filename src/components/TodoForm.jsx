import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSetRecoilState } from 'recoil';
import { todoState } from '../recoil/atoms';
import { toast } from 'react-toastify';
import JoditEditor from 'jodit-react';
import { useRef } from 'react';

export default function TodoForm() {
  const setTodos = useSetRecoilState(todoState);
  const editor = useRef(null);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      description: Yup.string().required('Description is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      const newTodo = {
        id: Date.now(),
        ...values,
        completed: false,
      };
      setTodos((prev) => [newTodo, ...prev]);
      toast.success('Task added!');
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 mb-6">
      <input
        type="text"
        name="title"
        placeholder="Task title"
        onChange={formik.handleChange}
        value={formik.values.title}
        className="w-full p-2 border rounded"
      />
      {formik.touched.title && formik.errors.title && (
        <p className="text-red-500 text-sm">{formik.errors.title}</p>
      )}

      <JoditEditor
        ref={editor}
        value={formik.values.description}
        onBlur={(newContent) => formik.setFieldValue('description', newContent)}
      />
      {formik.touched.description && formik.errors.description && (
        <p className="text-red-500 text-sm">{formik.errors.description}</p>
      )}

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  );
}