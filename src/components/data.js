const SAMPLE_DATA = {
    "total_rows": 50,
    "total_pages": 5,
    "current_page": 1,
    "page_size": 10,
    "columns": [
        {
            "name": "text",
            "type": "object"
        },
        {
            "name": "translation",
            "type": "object"
        },
        {
            "name": "reference_text",
            "type": "object"
        },
        {
            "name": "gs_audio_filepath",
            "type": "object"
        },
        {
            "name": "lang",
            "type": "object"
        },
        {
            "name": "duration",
            "type": "float64"
        },
        {
            "name": "language",
            "type": "object"
        },
        {
            "name": "type",
            "type": "object"
        },
        {
            "name": "audio_filepath",
            "type": "object"
        }
    ],
    "filterable_columns": [
        {
            "name": "lang",
            "filter_type": "categorical",
            "unique_values": [
                "Hindi"
            ],
            "min_value": null,
            "max_value": null,
            "allowed_operators": [
                "eq",
                "ne",
                "in",
                "not_in"
            ]
        },
        {
            "name": "duration",
            "filter_type": "numeric",
            "unique_values": null,
            "min_value": 1.205,
            "max_value": 15.95,
            "allowed_operators": [
                "eq",
                "ne",
                "gt",
                "lt",
                "ge",
                "le"
            ]
        },
        {
            "name": "language",
            "filter_type": "categorical",
            "unique_values": [
                "hindi",
                "english"
            ],
            "min_value": null,
            "max_value": null,
            "allowed_operators": [
                "eq",
                "ne",
                "in",
                "not_in"
            ]
        },
        {
            "name": "type",
            "filter_type": "categorical",
            "unique_values": [
                "noa"
            ],
            "min_value": null,
            "max_value": null,
            "allowed_operators": [
                "eq",
                "ne",
                "contains",
                "in",
                "not_in"
            ]
        },
    ],
    "data": [
        {
            "text": "उन्होंने प्रदेश की जनता से विभिन्न माध्यमों से लिए गए सुझावों को लेकर दिल्ली में की बैठक में जानकारी दी। संकल्प पत्र समिति के अध्यक्ष रक्षा मंत्री राजनाथ सिंह",
            "translation": "They gave information in a meeting in Delhi regarding the suggestions received from the people of the state through various means.  Raksha Mantri (Defense Minister) Rajnath Singh, the chairman of the Sankalp Patra (Resolution Paper) Committee.",
            "reference_text": "उन्होंने प्रदेश की जनता से विभिन्न माध्यमों से लिए गए सुझावों को लेकर दिल्ली की बैठक में जानकारी दी",
            "gs_audio_filepath": "gs://audiotextdata/asr_train_dataset_0_3/NoA/hi/audio/Bhopal_Hindi_01_Apr_2024_19-34_16khz_chunk_27.wav",
            "lang": "Hindi",
            "duration": 9.07,
            "language": "hindi",
            "type": "noa",
            "audio_filepath": "/shared/home/model/bible_noa_audios/noa/Bhopal_Hindi_01_Apr_2024_19-34_16khz_chunk_27.wav"
        },
        {
            "text": "इस अवसर पर कलेक्टर डॉ सतेन्द्र सिंह सहित समस्त अधिकारियों द्वारा सामूहिक रूप से राष्ट्रगान और राष्ट्रगीत गाया गया।",
            "translation": "On this occasion, the national anthem and national song were sung collectively by all the officers including Collector Dr. Satendra Singh.",
            "reference_text": "इस अवसर पर कलेक्टर डॉ. सतेन्द्र सिंह सहित समस्त अधिकारियों द्वारा सामूहिक रूप से राष्ट्रगान एवं राष्ट्रीय गीत गाया",
            "gs_audio_filepath": "gs://audiotextdata/asr_train_dataset_0_3/NoA/hi/audio/Bhopal_Hindi_01_Apr_2024_14-39_16khz_chunk_31.wav",
            "lang": "Hindi",
            "duration": 5.76,
            "language": "hindi",
            "type": "noa",
            "audio_filepath": "/shared/home/model/bible_noa_audios/noa/Bhopal_Hindi_01_Apr_2024_14-39_16khz_chunk_31.wav"
        },
        {
            "text": "उधर बुरहानपुर में मतगणना की तैयारियों और व्यवस्थाओं के संबंध में आज कलेक्टर और जिला निर्वाचन अधिकारी की अध्यक्षता में एक पत्रकार वार्ता आयोजित की गई।",
            "translation": "Meanwhile, in Burhanpur, a press conference was organized today under the chairmanship of the Collector and the District Election Officer regarding the preparations and arrangements for the counting of votes.",
            "reference_text": "उधर, बुरहानपुर में मतगणना की तैयारियों एवं व्यवस्थाओं के संबंध में आज कलेक्टर एवं जिला निर्वाचन अधिकारी की अध्यक्षता में पत्रकार वार्ता आयोजित की गई",
            "gs_audio_filepath": "gs://audiotextdata/asr_train_dataset_0_3/NoA/hi/audio/Bhopal_Hindi_01_Jun_2024_14-10_16khz_chunk_17.wav",
            "lang": "Hindi",
            "duration": 7.92,
            "language": "hindi",
            "type": "noa",
            "audio_filepath": "/shared/home/model/bible_noa_audios/noa/Bhopal_Hindi_01_Jun_2024_14-10_16khz_chunk_17.wav"
        },
        {
            "text": "चैत्र कृष्ण पक्ष सप्तमी तिथि पर मनाया जाने वाला पर्व शीतला सप्तमी आज प्रदेश भर में परंपरागत रूप से मनाया गया। बड़ी संख्या में महिलाओं द्वारा शीतला माता का पूजन किया गया।",
            "translation": "The festival celebrated on the seventh day of the Krishna Paksha in the month of Chaitra is Sheetla Saptami. Today, it was celebrated traditionally throughout the state. A large number of women performed the puja of Sheetla Mata.",
            "reference_text": "चैत्र कृष्ण क्ष सप्तमी तिथि र मनाया जाने वाला र्व शीतला सप्तमी आज प्रदेश में रंरागत रू से मनाया गया",
            "gs_audio_filepath": "gs://audiotextdata/asr_train_dataset_0_3/NoA/hi/audio/Bhopal_Hindi_01_Apr_2024_19-34_16khz_chunk_60.wav",
            "lang": "Hindi",
            "duration": 11.09,
            "language": "hindi",
            "type": "noa",
            "audio_filepath": "/shared/home/model/bible_noa_audios/noa/Bhopal_Hindi_01_Apr_2024_19-34_16khz_chunk_60.wav"
        },
        {
            "text": "महादेव की होली कार्यक्रम के दौरान सिर में नारियल लगने से वह घायल हो गए। फिलहाल डॉक्टर उन्हें आराम करने की सलाह दे रहे हैं।",
            "translation": "During a Mahadev Holi program, he was injured when a coconut hit his head. Currently, the doctor is advising him to rest.",
            "reference_text": "आष्टा में आयोजित महादेव की होली कार्यक्रम के दौरान सिर में नारियल लगने से वह घायल हो गए",
            "gs_audio_filepath": "gs://audiotextdata/asr_train_dataset_0_3/NoA/hi/audio/Bhopal_Hindi_01_Apr_2024_19-34_16khz_chunk_57.wav",
            "lang": "Hindi",
            "duration": 6.33,
            "language": "hindi",
            "type": "noa",
            "audio_filepath": "/shared/home/model/bible_noa_audios/noa/Bhopal_Hindi_01_Apr_2024_19-34_16khz_chunk_57.wav"
        },
        {
            "text": "सर्वोच्च न्यायालय ने धार जिले में विवादित भोजशाला और कमाल मौला मस्जिद परिसर के वैज्ञानिक सर्वेक्षण पर रोक लगाने से इंकार कर दिया है।",
            "translation": "The Supreme Court has refused to put a stop to the scientific survey of the disputed Bhojshala and Kamal Maula Masjid complex in Dhar district.",
            "reference_text": "सर्वोच्च न्यायालय ने धार जिले में विवादित भोजशाला और कमाल मौला मस्जिद रिसर के वैज्ञानिक सर्वेक्षण र रोक लगाने से इंकार कर दिया है",
            "gs_audio_filepath": "gs://audiotextdata/asr_train_dataset_0_3/NoA/hi/audio/Bhopal_Hindi_01_Apr_2024_19-34_16khz_chunk_15.wav",
            "lang": "Hindi",
            "duration": 8.445,
            "language": "hindi",
            "type": "noa",
            "audio_filepath": "/shared/home/model/bible_noa_audios/noa/Bhopal_Hindi_01_Apr_2024_19-34_16khz_chunk_15.wav"
        },
        {
            "text": "वित्त वर्ष 2022-23 में जीडीपी विकास दर 7 प्रतिशत रही थी।",
            "translation": "In the fiscal year 2022-23, the GDP growth rate was 7 percent.",
            "reference_text": "वित्त वर्ष 2022-23 में जी डी पी विकास दर 7 प्रतिशत रही थी",
            "gs_audio_filepath": "gs://audiotextdata/asr_train_dataset_0_3/NoA/hi/audio/Bhopal_Hindi_01_Jun_2024_14-10_16khz_chunk_28.wav",
            "lang": "Hindi",
            "duration": 3.64,
            "language": "hindi",
            "type": "noa",
            "audio_filepath": "/shared/home/model/bible_noa_audios/noa/Bhopal_Hindi_01_Jun_2024_14-10_16khz_chunk_28.wav"
        },
        {
            "text": "इंदौर जिले में युवाओं को मतदान के प्रति जागरूक करने के लिए विशेष प्रयास किए जा रहे हैं। इसी क्रम में इंदौर जिले के सभी महाविद्यालयों में मतदाता साक्षरता क्लब का गठन किया जा रहा है।",
            "translation": "Special efforts are being made to make young people in Indore district aware of voting. In this series, voter literacy clubs are being formed in all colleges of Indore district.",
            "reference_text": "इंदौर जिले में य्वाओं को मतदान के प्रति जागरूक करने के लिए विशेष प्रयास किये जा रहे है",
            "gs_audio_filepath": "gs://audiotextdata/asr_train_dataset_0_3/NoA/hi/audio/Bhopal_Hindi_01_Apr_2024_19-34_16khz_chunk_43.wav",
            "lang": "Hindi",
            "duration": 9.88,
            "language": "hindi",
            "type": "noa",
            "audio_filepath": "/shared/home/model/bible_noa_audios/noa/Bhopal_Hindi_01_Apr_2024_19-34_16khz_chunk_43.wav"
        },
        {
            "text": "नीमच में कलेक्टर ने डूंगलावदा में स्थापित गेहूं और चना उपार्जन केंद्र का निरीक्षण कर व्यवस्थाओं का जायजा लिया",
            "translation": "The collector in Neemuch inspected the wheat and gram procurement center established in Dunglavada and reviewed the arrangements.",
            "reference_text": "नीमच में कलेक्टर ने ड्रंगलावदा में स्थाप्रित गेहं और चना उपार्जन केंद्र का निरीक्षण कर व्यवस्थाओं का जायजा लिया",
            "gs_audio_filepath": "gs://audiotextdata/asr_train_dataset_0_3/NoA/hi/audio/Bhopal_Hindi_01_Apr_2024_19-34_16khz_chunk_54.wav",
            "lang": "Hindi",
            "duration": 6.345,
            "language": "hindi",
            "type": "noa",
            "audio_filepath": "/shared/home/model/bible_noa_audios/noa/Bhopal_Hindi_01_Apr_2024_19-34_16khz_chunk_54.wav"
        },
        {
            "text": "ऑडिटोरियम हाल छतरपुर में पुलिस मुख्यालय के उड़ान अभियान के तहत पुलिस अधीक्षक छतरपुर की अध्यक्षता में महिला पुलिस अधिकारियों का प्रशिक्षण हुआ जिसमें महिला पीड़िता के साथ संवेदनशीलता और सकारात्मक व्यवहार करने और उनकी समस्याओं के शीघ्र निराकरण हेतु दिशा निर्देश दिए गए।",
            "translation": "In the auditorium hall of Chhatarpur, under the 'Udaan Abhiyan' of the police headquarters, training was conducted for women police officers under the chairmanship of the Superintendent of Police, Chhatarpur.  Guidelines were given on how to behave sensitively and positively with women victims and to quickly resolve their problems.",
            "reference_text": "ऑडिटोरियम हाल छतरपुर में पुलिस मुख्यालय के ‘उड़ान अभियान’ के तहत पुलिस अधीक्षक छतरपुर की अध्यक्षता में महिला पुलिस अधिकारियों के प्रशिक्षण में महिला पीड़िता के साथ संवेदनशीलता एवं संकरात्मक व्यवहार कर उनकी सेमस्याओं के शीघ्र निराकरण हेतु दिशा निर्देश दिए गए",
            "gs_audio_filepath": "gs://audiotextdata/asr_train_dataset_0_3/NoA/hi/audio/Bhopal_Hindi_02_May_2024_14-46_16khz_chunk_30.wav",
            "lang": "Hindi",
            "duration": 7.5,
            "language": "hindi",
            "type": "noa",
            "audio_filepath": "/shared/home/model/bible_noa_audios/noa/Bhopal_Hindi_02_May_2024_14-46_16khz_chunk_30.wav"
        }
    ],
    "message": "Dataset loaded successfully"
}

export { SAMPLE_DATA }