import { Button } from "antd";
import { Link, Outlet} from "react-router-dom";

export function Header() {

    return (
        <header>
          <nav >
                <Link to="/">
                <Button type="link">Test 1</Button>
                </Link>
                <Link to="/test2">
                    <Button type="link">Test 2</Button>
                </Link>
                <Link to="/test3">
                    <Button type="link">Test 3</Button>
                </Link>
          </nav>

          <Outlet/>
        </header>
      )
  }