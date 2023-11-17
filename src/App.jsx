import { useResumeCollection } from './hooks/useResumeCollection';
import SimpleSection from './components/SimpleSection'
import WorkExSection from './components/WorkExSection'
import ProjectSection from './components/ProjectSection'

function App() {
  const resume = useResumeCollection(); // 'resume' array will contain some objects whose 'content' key does not contain a string 
  const resumeList = resume.length > 0 ? 
    resume
    .sort((a, b) => a.sequence - b.sequence)
    .map((doc) => {
      if(!Array.isArray(doc.content)){
        return <SimpleSection key={doc.id} title={doc.title} content={doc.content} />
      } else if (doc.type === 'workEx') {
        return <WorkExSection key={doc.id} title={doc.title} content={doc.content} />
      } else if (doc.type === 'projects') {
        return <ProjectSection key={doc.id} title={doc.title} content={doc.content} />
      }
    }) : 'Loading...';

  console.log(resume)
  return (
    <>
      {resumeList}
    </>
  )
}

export default App