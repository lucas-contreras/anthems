import { Injectable } from '@nestjs/common';

@Injectable()
export class AnthemService {
  getHello(): string {
    return 'Hello World!';
  }

  getSomething() {
    return {
      id: '1',
      name: 'Cantad alegres al Señor',
      backgroundImage: '1-21.jpg',
      // "backgroundImage": "35-45.jpg",
      source: 'http://localhost:8080/001_Cantad_alegres_al_Senior.mp3',
      description: 'Salmo 100:1-5',
      lyrics: [
        {
          id: '0',
          startTime: '00:00',
          endTime: '00:24',
          caption: 'Salmo 100:1-5',
          text: ['Cantad alegres al Señor'],
        },
        {
          id: '1',
          startTime: '00:25',
          endTime: '01:01',
          caption: '1',
          text: [
            'Cantad alegres al Señor',
            'mortales todos por doquier;',
            'servidle siempre con fervor,',
            'obedecedle con placer.',
          ],
        },
        {
          id: '2',
          startTime: '01:02',
          endTime: '01:38',
          caption: '2',
          text: [
            'Con gratitud canción alzad',
            'al Hacedor que el ser os dio;',
            'al Dios excelso venerad,',
            'que como Padre nos amó.',
          ],
        },
        {
          id: '3',
          startTime: '01:39',
          endTime: '02:20',
          caption: '3',
          text: [
            'Su pueblo somos: salvará',
            'a los que busquen al Señor;',
            'ninguno de ellos dejará;',
            'él los ampara con su amor.',
          ],
        },
        {
          id: '4',
          startTime: '02:20',
          endTime: '02:23',
          caption: 'Salmo 100:1-5',
          text: ['Cantad alegres al Señor'],
        },
      ],
    };
  }
}
