import React, { useEffect, useState } from 'react'
import LoadingAnimation from "../assets/blackLoader.svg"
import { betterAxios } from '../api/axios';
import { gcsSchema } from "../validations"
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

const AudioPlayer = ({ path }) => {
    const [audioSrc, setAudioSrc] = useState(null);

    const fetchAudioData = async () => {
        if (yupResolver(gcsSchema, path)) {
            const response = await betterAxios.get("api/v1/dataset/audio?path=" + path).then((res) => res);
            const { mime_type, data } = response.data;
            const src = `data:${mime_type};base64,${data}`;
            setAudioSrc(src);
        } else {
            toast.error("Invalid Audio URI")
        }
    }
    useEffect(() => {
        if (audioSrc) return;
        fetchAudioData();
    }, []);
    return (
        <div className='w-full inline-flex items-center justify-center'>
            {audioSrc ? <audio controls src={audioSrc} className='h-10'>
                Your browser does not support the audio element.
            </audio> : <div className='w-[30px] h-[30px]'><img src={LoadingAnimation} /></div>}
        </div>
    )
}

export default AudioPlayer