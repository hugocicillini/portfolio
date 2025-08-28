import WorkList from './WorkList';

const Work = () => {
  return (
    <div className="p-4 flex lg:w-4/5 w-full mx-auto flex-col gap-6 pt-12">
      <h2 className="text-3xl font-bold lg:w-full w-4/5 mx-auto">Projetos</h2>
      <p className="text-zinc-200 lg:w-full w-4/5 mx-auto">
        Alguns projetos realizados, para conferir outros:{' '}
        <a
          href="https://github.com/hugocicillini"
          target="_blank"
          className="underline text-zinc-100"
        >
          GitHub
        </a>
      </p>
      <WorkList />
    </div>
  );
};
export default Work;
