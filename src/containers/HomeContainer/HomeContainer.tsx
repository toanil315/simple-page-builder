import { Editor, Sidebar } from '@/components';
import { PageBuilderProvider } from '@/contexts';

const HomeContainer = () => {
  return (
    <PageBuilderProvider>
      <div className='flex flex-row mt-2'>
        <Editor />
        <Sidebar />
      </div>
    </PageBuilderProvider>
  );
};

export default HomeContainer;
