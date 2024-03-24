import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Frequently = () => {
    return (
        <div className='container mx-auto px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 pt-4 md:pt-16 mb-10'>
            <div className='flex-shrink-0 text-center mb-10'>
                <div className='flex-shrink-0 text-center'>
                    <h1 className='capitalize font-montserrat text-black leading-6 md:leading-10 text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl'
                        style={{ lineHeight: '1.5' }}>Our most  <samp className='text-customOrange px-1'>frequently</samp>
                        asked questions </h1>
                </div>
            </div>

            <div className="max-w-screen-lg mx-auto">
                <Accordion sx={{ borderBottom: 'none', marginBottom: '4px' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#ff5722' }} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{ borderBottom: '1px solid #ff5722', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
                    >
                        <Typography>Do I really get unlimited design services?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ borderBottom: 'none', marginBottom: '4px' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#ff5722' }} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{ borderBottom: '1px solid #ff5722', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
                    >
                        <Typography>What is a realistic turnaround time?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ borderBottom: 'none', marginBottom: '4px' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#ff5722' }} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{ borderBottom: '1px solid #ff5722', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
                    >
                        <Typography>I need my designs ASAP—can you help?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ borderBottom: 'none', marginBottom: '4px' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#ff5722' }} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{ borderBottom: '1px solid #ff5722', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
                    >
                        <Typography>What types of projects do you work on?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ borderBottom: 'none', marginBottom: '4px' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#ff5722' }} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{ borderBottom: '1px solid #ff5722', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
                    >
                        <Typography>What if I want to cancel my service?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>

        </div>
    )
}

export default Frequently