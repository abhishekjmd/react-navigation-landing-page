import React from 'react';
import { Box, Drawer, ListItemIcon, List, ListItem, ListItemButton, ListItemText, Accordion, AccordionSummary, AccordionDetails, Typography, IconButton, ImageList } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
  const svgDataUrl = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.7' viewBox='0 0 24 24'%3E%3Cpath d='M21 6H3m12 6H3m14 6H3'/%3E%3C/svg%3E";
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 400, }} role="presentation">
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <img src={"https://reactnavigation.org/img/spiro.svg"} alt="My SVG Icon" width={30} />
          <b className="font-bold">React Navigation</b>
        </Box>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon sx={{ fontSize: '30px' }} />
        </IconButton>
      </Box>
      <List>
        {/* Accordion for Versions */}
        <Accordion sx={{ boxShadow: 'none', borderWidth: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Versions</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ margin: '0', padding: '0' }}>
            <List sx={{ margin: '0', padding: '0' }}>
              {['7.x', '6.x', '5.x', '4.x', '3.x', '2.x', '1.x'].map((version, index) => (
                <ListItem sx={{ padding: '0', paddingBottom: index === 6 ? '10px' : '0' }} key={version}>
                  <ListItemButton>
                    <ListItemText primary={version} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
        {['Docs', 'Blog',].map((text, index) => (
          <ListItem sx={{ borderWidth: 1, borderTopWidth: index === 0 ? 0 : 1, borderBottomWidth: index === 1 ? 0 : 1 }} key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        {/* Accordion for Help */}
        <Accordion sx={{ boxShadow: 'none', borderWidth: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Help</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ margin: '0', padding: '0' }}>
            <List sx={{ margin: '0', padding: '0' }}>
              {['Issues', 'Feature Requests', 'Reactiflux Discord', 'Stack Overflow', 'Troubleshooting', 'Contributing',].map((Help, index) => (
                <ListItem sx={{ padding: '0', marginBottom: index === 4 ? '10px' : '0' }} key={Help}>
                  <ListItemButton>
                    <ListItemText primary={Help} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      </List>
      <List sx={{ margin: '0', padding: '0' }}>
        {['x', 'github'].map((text, index) => (
          <ListItem sx={{ paddingY: '8px', borderWidth: 1, borderTopWidth: index === 0 ? 0 : 1, borderBottomWidth: index === 1 ? 0 : 1 }} key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {
                  index === 0 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" xmlSpace="preserve" viewBox="0 0 16 16" id="github">
                      <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" id="x">
                      <path fill="#051344" fill-rule="evenodd" d="M20.7071 4.70711C21.0976 4.31658 21.0976 3.68342 20.7071 3.29289C20.3166 2.90237 19.6834 2.90237 19.2929 3.29289L13.348 9.23779L9.07342 3.40865C8.88504 3.15177 8.58555 3 8.267 3H4C3.62317 3 3.27833 3.21184 3.108 3.54798C2.93766 3.88412 2.97075 4.28747 3.19359 4.59135L9.45538 13.1304L3.29289 19.2929C2.90237 19.6834 2.90237 20.3166 3.29289 20.7071C3.68342 21.0976 4.31658 21.0976 4.70711 20.7071L10.652 14.7622L14.9266 20.5914C15.115 20.8482 15.4145 21 15.733 21H20C20.3768 21 20.7217 20.7882 20.892 20.452C21.0623 20.1159 21.0293 19.7125 20.8064 19.4086L14.5446 10.8696L20.7071 4.70711ZM12.3703 11.2865C12.4012 11.338 12.4371 11.3872 12.4781 11.4336L18.0266 19H16.2398L5.97338 5H7.76026L12.3703 11.2865Z" clip-rule="evenodd" />
                    </svg>
                  )

                }
              </ListItemIcon>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <nav>
      <div className="flex  flex-row w-full border-2">
        <div className="flex flex-row items-center w-[100%]  justify-between p-[15px] lg:px-20 ">
          <div className="lg:hidden" onClick={toggleDrawer(true)}>
            <img src={svgDataUrl} className="object-center text-[black]" alt="My SVG Icon" width={25} />
          </div>
          {/* <div className='lg:hidden block'> */}
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
          {/* </div> */}
          <div className="flex flex-row justify-center items-center gap-3">
            <img src={"https://reactnavigation.org/img/spiro.svg"} alt="My SVG Icon" width={30} />
            <b className="font-bold">React Navigation</b>
          </div>
          <ul className='hidden lg:flex flex-row gap-6 justify-center items-center'>
            <li className="hidden lg:flex flex-row items-center justify-center gap-1">
              <select className="appearance-none font-semibold outline-none ">
                <option>7.x</option>
                <option>6.x</option>
                <option>5.x</option>
                <option>4.x</option>
                <option>3.x</option>
                <option>2.x</option>
                <option>1.x</option>
              </select>
              <svg width="20" height="20" className="text-[#414360] flex flex-row items-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path></svg>
            </li>
            <li className='font-semibold'><a>Docs</a>  </li>
            <li className='font-semibold'><a>Blog</a> </li>
            <li>
              <label className='font-semibold'>Help</label>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" id="x">
                <path fill="#051344" fill-rule="evenodd" d="M20.7071 4.70711C21.0976 4.31658 21.0976 3.68342 20.7071 3.29289C20.3166 2.90237 19.6834 2.90237 19.2929 3.29289L13.348 9.23779L9.07342 3.40865C8.88504 3.15177 8.58555 3 8.267 3H4C3.62317 3 3.27833 3.21184 3.108 3.54798C2.93766 3.88412 2.97075 4.28747 3.19359 4.59135L9.45538 13.1304L3.29289 19.2929C2.90237 19.6834 2.90237 20.3166 3.29289 20.7071C3.68342 21.0976 4.31658 21.0976 4.70711 20.7071L10.652 14.7622L14.9266 20.5914C15.115 20.8482 15.4145 21 15.733 21H20C20.3768 21 20.7217 20.7882 20.892 20.452C21.0623 20.1159 21.0293 19.7125 20.8064 19.4086L14.5446 10.8696L20.7071 4.70711ZM12.3703 11.2865C12.4012 11.338 12.4371 11.3872 12.4781 11.4336L18.0266 19H16.2398L5.97338 5H7.76026L12.3703 11.2865Z" clip-rule="evenodd" />
              </svg>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" xmlSpace="preserve" viewBox="0 0 16 16" id="github">
                <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z" />
              </svg>
            </li>
            <button>
              <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"></path></svg>
            </button>
            <div className='hidden lg:flex flex-row justify-center items-center bg-[#ebedf0] rounded-md p-2 pr-6 pl-6 gap-1.5'>
              <svg width="20" className="text-[#1c1e21] h-[15px]" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" strokeWidth="2" stroke-linejoin="round"></path></svg>
              <span className='text-[#969faf] font-medium'>Search</span>
            </div>
          </ul>
          <div className="lg:hidden  bg-[#ebedf0] w-[32px] h-[35px] rounded-[5px] flex justify-center items-center">
            <span className="font-bold">
              <svg width="20" className="text-[#1c1e21] h-[15px]" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" strokeWidth="2" stroke-linejoin="round"></path></svg>
            </span>
          </div>
        </div>
      </div >
    </nav >
  )
}

export default NavBar
