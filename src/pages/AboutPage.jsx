import Card from "../components/shared/Card";
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <div className="container">
      <Card>
        <h1>About Page</h1>
        <h2>This is the message shown in the about page.</h2>
        <Link to="/">Go back</Link>
      </Card>
    </div>
  )
}

export default AboutPage;
