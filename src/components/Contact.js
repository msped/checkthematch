import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { 
    TextField,
    Card,
    CardContent,
    Typography,
    Button,
    Stack,
    Container,
} from '@mui/material'

export default function Contact() {
    const form = useRef();
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const userID = process.env.REACT_APP_USER_ID;

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm(serviceID, templateID, form.current, userID)
            .then((result) => {
                alert("Message sent");
                form.current.reset();
            }, (error) => {
                alert(error.text);
            });
    };

    return (
        <Container maxWidth="sm" sx={{ marginTop: 3}}>
            <Card>
                <CardContent>
                    <Typography variant='h4' sx={{ textAlign: 'center'}}>Contact</Typography>
                    <Typography 
                        component='p' 
                        variant='body2' 
                        color="text.secondary"
                        sx={{ textAlign: 'center', margin: 2 }}
                    >
                        Fill out the form and we will aim to get back to you within 48 hours.
                    </Typography>
                    
                    <form ref={form} onSubmit={sendEmail}>
                        <Stack direction="column" spacing={2}>
                            <TextField type="text" name="name" label="Name" placeholder='Name' variant='outlined' fullWidth required />
                            <TextField type="email" name="email" label="Email" placeholder='Email Address' variant='outlined' fullWidth required />
                            <TextField multiline rows={4} name="message" label="Message" placeholder='Type your message here' variant='outlined' fullWidth required />
                            <Button type="submit" variant="contained" color="primary">Send</Button>
                        </Stack>
                    </form>
                </CardContent>
            </Card>
        </Container>
    )
}

