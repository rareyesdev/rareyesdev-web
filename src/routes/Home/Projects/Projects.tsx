import { FunctionComponent, h } from 'preact';
import style from './Projects.css';
import LazyPicture from '../../../components/LazyPicture/LazyPicture';
import Project from './Project/Project';

const Projects: FunctionComponent = () => {
  return (
    <section id="projects">
      <div class={style.header}>
        <h2>PROJECTS</h2>
      </div>
      <p class={style.intro}>
        I've been doing mostly enterprise work, sometimes I work on small project for learning
        purposes. These are the ones that are public.
      </p>
      <div class={style.container}>
        <Project
          previewPicture={
            <LazyPicture>
              <source
                type="image/webp"
                data-srcset="/assets/images/home/projects/json-viewer-project-preview-50-2x.webp 2x"
              />
              <source
                type="image/jpeg"
                data-srcset="/assets/images/home/projects/json-viewer-project-preview-100-2x.png 2x"
              />
              <img
                width="440"
                height="509"
                data-srcset="/assets/images/home/projects/json-viewer-project-preview-100-2x.png 2x"
                alt="json viewer project preview"
              />
            </LazyPicture>
          }
          title={{
            value: 'Online Json Viewer',
            href: 'https://json-viewer.netlify.app',
          }}
          description={
            <div>
              <p>This is useful if you spend a lot of time comparing JSON objects.</p>
              <p>
                I wanted to have a way I could store them temporarily without having to create a
                bunch of files on my desktop.
              </p>
              <p>
                It's also an excuse to practice automation. I created a full CI/CD pipeline with
                automatic review apps from Pull Requests that are unit and end-to-end tested with
                Jest and Cypress.
              </p>
            </div>
          }
          badges={[
            'React',
            'React Router',
            'Redux',
            'Redux Sagas',
            'TypeScript',
            'Semantic UI',
            'Emotion',
            'Jest',
            'Cypress',
            'Webpack',
            'Babel',
            'Google Analytics',
            'GitLab CI',
            'Heroku',
            'Netlify',
            'Prettier',
            'ESLint',
            'Lint Staged',
            'Commitizen',
          ]}
        />
        <Project
          previewPicture={
            <LazyPicture>
              <source
                type="image/webp"
                data-srcset="/assets/images/home/projects/habit-tracker-project-preview-50-2x.webp 2x"
              />
              <source
                type="image/jpeg"
                data-srcset="/assets/images/home/projects/habit-tracker-project-preview-100-2x.png 2x"
              />
              <img
                width="440"
                height="511"
                data-srcset="/assets/images/home/projects/habit-tracker-project-preview-100-2x.png 2x"
                alt="habits tracker project preview"
              />
            </LazyPicture>
          }
          title={{
            value: 'Habits Tracker',
            href: 'https://habits.rareyes.dev',
          }}
          description={
            <div>
              <p>I use it to track my habits (good and bad). This way I know how well I'm doing.</p>
              <p>I wanted to learn Firebase.</p>
              <p>This is still in early development.</p>
            </div>
          }
          badges={['React', 'TypeScript', 'Firebase']}
        />
      </div>
    </section>
  );
};

export default Projects;
