import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CampaignIcon from '@mui/icons-material/Campaign';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TimerIcon from '@mui/icons-material/Timer';
import useGetOrderById from '../../hooks/useGetOrderById';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import io from 'socket.io-client';
import Dialog from '../Dialog/DialogNotify';
import FormApi from '../../api/formApi';
import DialogConfirm from '../Dialog/DialogConfirm';
import moment from 'moment';
import 'moment/locale/vi';
import { currentHost } from '../../utils/path';

const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#202C45',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#E81C2E',
            dark: '#ba000d',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            'Barlow',
            '"Segoe UI"',
            'Roboto',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});
export default function CustomizedTimeline() {
    const params = useParams();
    const socket = io("https://dissertation-api-server.herokuapp.com", { transports: ['websocket', 'polling', 'flashsocket'] });
    let [loading, order] = useGetOrderById(params.id);
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState('');
    const [openDialogConfirm, setOpenDialogConfirm] = useState(false);
    const handleCloseDialog = (status) => {
        setOpen(status);
    };
    const handleCloseDialogConfirm = (status) => {
        setOpenDialogConfirm(status);
    };
    const handleClick = () => {
        setOpenDialogConfirm(true);
    };
    const handleAccept = (value) => {
        if (value) {
            socket.on("connect", () => {
                console.log(socket.id);
            });
            if (!loading) {
                FormApi.cancelOrder(params.id)
                    .then(res => {
                        setOpen(true);
                        setContent("???? h???y l???ch h???n th??nh c??ng!");
                        // console.log(res);
                    })
                    .catch(err => {
                        if (err.response.status === 403) {
                            let titleNotify = "C?? y??u c???u h???y l???ch h???n t??? " + order.contactInfo.name;
                            let content = "ch??? x??c nh???n h???y";
                            FormApi.createNotification({
                                title: titleNotify, content: content,
                                from: order.contactInfo.email, type: "orderCancel",
                                createdAt: new Date(), detail: { idOrder: order._id }
                            })
                                .then(res => {
                                    setOpen(true);
                                    setContent("???? g???i y??u c???u h???y l???ch h???n do c???a h??ng ???? x??c nh???n");
                                    socket.emit('send', {
                                        title: titleNotify, content: content,
                                        from: order.contactInfo.email, type: "orderCancel",
                                        createdAt: new Date(), detail: { idOrder: order._id },
                                        isRead: false,
                                    });
                                })
                                .catch(err => {
                                    setOpen(true);
                                    setContent("C?? l???i x???y ra, vui l??ng th??? l???i sau!!!");
                                    console.log(err);
                                });
                        }
                        console.log(err);
                    });
            }
        }
    };
    if (loading) return <>
        <h2 style={{ textAlign: "center" }}>??ang t???i th??ng tin</h2>
        <Stack alignItems="center" mt={10} mb={10}>
            <CircularProgress size={80} />
        </Stack>
    </>;
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {open ? <Dialog open={open}
                handleCloseDialog={handleCloseDialog}
                title="Th??ng b??o"
                url={`${currentHost()}/`}
                content={content} /> : null}
            {openDialogConfirm ? <DialogConfirm open={openDialogConfirm}
                isAccept={handleAccept}
                handleCloseDialog={handleCloseDialogConfirm}
                title="Th??ng b??o"
                url={"/"} cancel="H???y b???" accept="X??c nh???n h???y"
                content={"B???n c?? ch???c mu???n h???y l???ch h???n n??y?"} /> : null}
            <div style={{display:'flex', flexDirection:'column', alignItems: 'center',justifyContent: "center"}}>
                <h4 style={{ textAlign: 'center' }}>Chi ti???t l???ch h???n</h4>
                <h5>Ng?????i ?????t l???ch: {order.contactInfo.name}</h5>
                <h5>Email ?????t: {order.contactInfo.email}</h5>
                <h5>Th???i gian ?????t: {moment(order.createdAt).format('DD/MM/YYYY')}</h5>
                <h5>D???ch v??? ???? ch???n: {order.listService.map((item,index)=>{
                    return <h6 style={{display: 'inline'}} key={index}>{item.productName}, </h6>
                })}</h5>
                <h5>Combo: {order.combo}</h5>
                <h5>T???ng ti???n: {Math.round(order.totalPrice).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + '??? '}</h5>
                <h5>Th???i gian h???n: {moment(order.dateAppointment).locale('vi').format('LLLL')}</h5>
                <h4 style={{ textAlign: 'center' }}>Tr???ng th??i l???ch h???n</h4>
            </div>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        B?????c 1
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        <TimelineDot color="secondary">
                            <TimerIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            G???i y??u c???u ph???c v???
                        </Typography>
                        <Typography>B???n ???? g???i y??u c???u v?? ????(ho???c ch??a) thanh to??n</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        B?????c 2
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        {order.isConfirmed ?
                            <>

                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                <TimelineDot color="secondary">
                                    <RepeatIcon />
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            </>
                            :
                            <>
                                <TimelineConnector />
                                <TimelineDot>
                                    <RepeatIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </>
                        }
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            C???a h??ng
                        </Typography>
                        <Typography>X??c nh???n t??? c???a h??ng</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        B?????c 3
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        {order.isSendEmail ?
                            <>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                <TimelineDot color="secondary">
                                    <CampaignIcon />
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            </>
                            :
                            <>
                                <TimelineConnector />
                                <TimelineDot>
                                    <CampaignIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </>
                        }
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Nh???n th??ng b??o
                        </Typography>
                        <Typography>C???a h??ng ???? g???i cho b???n th??ng b??o qua email</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        B?????c 4
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        {order.isCompleted ?
                            <>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                <TimelineDot color="secondary">
                                    <FactCheckIcon />
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            </>
                            : <>
                                <TimelineConnector />
                                <TimelineDot >
                                    <FactCheckIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </>
                        }
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Ho??n th??nh
                        </Typography>
                        <Typography>C???m ??n b???n ???? s??? d???ng d???ch v??? c???a ch??ng t??i!</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
            <Box textAlign='center'>
                <DialogConfirm />
                {
                    !order.isCompleted ? <Button color="secondary" variant="contained"
                        style={{ textTransform: 'none' }} startIcon={<CancelIcon />}
                        onClick={handleClick}>
                        H???y l???ch h???n
                    </Button> : null
                }
            </Box>
        </ThemeProvider>
    );
}
