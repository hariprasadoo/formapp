export {}
declare global { 

  interface IBook {
    id: number;
    title: string;
  }

  interface BookEditProps {
    book: {
      id: number;
      title: string;
    };
    onSubmit: () => void;
  }

  interface IBooksContext {
    books: Array<IBooks>;
    fetchBook: () => Promise<void>;
    editBookById: (id: number, newTitle: string) => Promise<void>;
    deleteBookById: (id: number) => Promise<void>;
    createBook: (title: string) => Promise<void>;
  }
  
  interface IProviderProps {
    children: React.ReactNode;
  }

}