import './tabs.css';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function Tabs({setPage}) {
  return (
    <div className="tabs">
      <div className="tab" onClick={() => setPage(0)}>
         <HomeIcon />
         <div className="tabName">Home</div>
      </div>
      <div className="tab" onClick={() => setPage(1)}>
         <Person2Icon />
         <div className="tabName">About</div>
      </div>
      <div className="tab" onClick={() => setPage(2)}>
         <ViewQuiltIcon />
         <div className="tabName">Portfolio</div>
      </div>
      <div className="tab" onClick={() => setPage(3)}>
         <AlternateEmailIcon />
         <div className="tabName">Contact</div>
      </div>
    </div>
  )
}
