import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FloraService } from 'src/app/Services/flora.service';
import { PhotoService } from 'src/app/Services/photo.service';
import { TokenService } from 'src/app/Services/token.service';
import { Photo } from 'src/app/models/photo.model';
@Component({
  selector: 'app-add-flora',
  templateUrl: './add-flora.component.html',
  styleUrls: ['./add-flora.component.css'],
})
export class AddFloraComponent implements OnInit {
  constructor(private fb: FormBuilder, private photoService: PhotoService,private floraService :FloraService) {}

  scientificname = new FormControl('');
  coverPhoto: Photo = {
    isCoverPhoto: true,
    path: '',
  };
  photos: Photo[] = [];

  floraForm = this.fb.group({
    banglaName: ['কলা গাছ'],
    othersName: ['Banana Tree'],
    description: ['সারা বছর এ দেশের প্রায় সব অঞ্চলের উঁচু জমিতেই এর চাষ করা যায়। পার্বত্য এলাকায় বনকলা, বাংলাকলা, মামা কলাসহ বিভিন্ন ধরনের বুনোজাতের কলা চাষ হয়।[১]। কলম্বিয়া ইত্যাদি ল্যাটিন আমেরিকান দেশে কলা প্রধান অর্থকরী ফসল। প্রাগাধুনিক ভারতীয় অর্থনীতিতেও একটি প্রধান অর্থকরী ফসল হিসাবে কলার চাষাবাদ হতো। খনার বচনে আছে, "কলা রুয়ে না কেটো পাত, তাতেই কাপড়, তাতেই ভাত"।[১] গাছের বর্ণনা কলা গাছ থেকে ঝুলন্ত কলার কাঁদি উদ্ভিদ বিজ্ঞানী মালানের মতে ভারতবর্ষ ও চীন কলার জন্মভুমি । কিন্তু আরেক উদ্ভিদ বিজ্ঞানী হিল পাক-ভারত ও মালয়কে কলার উৎপত্তিস্থল বিবেচনা করেছেন। কলাগাছ একটি বীরুৎ শ্রেণির উদ্ভিদ। আবার এটি একবীজপত্রী উদ্ভিদ। অধিকাংশ জাতের গাছই বহুবর্ষজীবী । মাটির নিচে রাইজোম বা কন্দ এবং মাটির ওপরে একটি ছদ্মকাণ্ড বা সিউডোস্টেম নিয়ে এ গাছ গঠিত। কাণ্ড ও পাতা উভয়ই সবুজ। কাঁচা কলা সবুজ, পেকে গেলে তা হলুদ হয়ে যায়। কলাপাতা সরল, পত্রভিত পুরু ও পত্রফলক প্রশস্ত।। পত্রফলকে দৃঢ়, মোটা ও সুস্পষ্ট ও মধ্যশিরা বিদ্যমান। মধ্য শিরার দুই পাশে সমান্তরাল শিরাগুলো বিন্যাসিত হয়। একান্তরক্রমে পাতাগুলোর উৎপত্তি ঘটে । পুষ্পমঞ্জুরী স্পেডিক্স ধরনের এবং নৌকার মত স্পেদ দ্বারা আবৃত থাকে। পুষ্পমঞ্জুরি গোড়ার দিকে ও আগার দিকে পুরুষ এবং নিরপেক্ষ ফুল থাকে। ফুল সাধারণত একপ্রতিসম উভলিঙ্গ। তবে কখনো কখনো একলিঙ্গ পুষ্পও দেখা যায় । ফুলের ব্রাক্টের রঙ অ্যান্থসায়ানিনের জন্য লালচে, গোলাপী বা বেগুনী হয়ে থাকে । ফুলে ছয়টি পাঁপড়ি পরস্পর ৩টি করে ২টি আবর্তে সজ্জিত থাকে। এগুলো যুক্ত বা পৃথক উভয়ভাবেই বিন্যস্ত থাকতে পারে। ফুলে পুংকেশর ৫টি, সবগুলোই উর্বর। যখন ৫টি দেখা যায় তখন অন্যটি অনুন্মোচিত বা অনুপস্থিত থাকে। স্ত্রী স্তবকের ৩টি গর্ভপত্র সংযুক্ত অবস্থায় দেখা যায় । ডিম্বাশয় অধোগর্ভ এবং তিনটি প্রকোষ্ঠ বিশিষ্ট। এর অমরাবিন্যাস অক্ষীয় ধরনের এবং ফল একক, সরস, ও বেরি(Berry) প্রকৃতির । প্রজাতি ও জাত কলার মোচা কলা Musaceae পরিবারের একটি উদ্ভিদ। এর দুটি গণ আছে যথা: Ensete ও Musa। এ পরিবারে প্রায় ৫০টি প্রজাতি অন্তর্ভুক্ত । Ensete গণের মাত্র ৬-৭টি প্রজাতি আছে, তবে এর মধ্যে মাত্র একটি প্রজাতি এ পর্যন্ত ইথিওপিয়ায় জন্মানো সম্ভব হয়েছে। Musa গণের প্রায় ৪০টি প্রজাতি রয়েছে। এর অধিকাংশ প্রজাতির উৎপত্তি দক্ষিণ-পশ্চিম এশিয়ায়। প্রায় সব আবাদকৃত কলাই এ প্রজাতির অন্তর্ভুক্ত । এই গণকে আবার ৫টি ভাগে ভাগ করা হয়েছে। বাংলাদেশে প্রায় ১৯টি জাত রয়েছে । পার্বত্য এলাকায় বাংলা কলা, বন কলা, মামা কলা ইত্যাদি নামেও কলার কিছু বুনো জাত দেখা যায়। ক্রমশ কলার জাতের সংখ্যা বাড়ছে। গাছের বৈশিষ্ট্য অনুসারে বাংলাদেশের বিভিন্ন জাতের কলা গাছকে দুটি ভাগে ভাগ করা হয়েছে যথা: লম্বা জাতের গাছ ও খাটো জাতের গাছ। পাকা অবস্থায় খাওয়ার জন্য কলার জাত ৪ প্রকার যথা:joo হলুদবর্ণ পাকা কলা সম্পূর্ণ বীজমুক্ত কলা: যেমন-সবরি, অমৃতসাগর, অগ্নিশ্বর, দুধসর, দুধসাগর প্রভৃতি । দু-একটি বীজযুক্ত কলা: যেমন-চাম্পা, চিনিচাম্পা, কবরী, চন্দন কবরী, জাবকাঠালী ইত্যাদি । বীজযুক্ত কলা: এটেকলা যেমন-বতুর আইটা, গোমা, সাংগী আইটা ইত্যাদি । আনাজী কলাসমুহ: যেমন-ভেড়ার ভোগ, চোয়াল পউশ, বর ভাগনে, বেহুলা, মন্দিরা, বিয়েরবাতি প্রভৃতি। কলার গুণাগুণ কলা বিভিন্ন গুণাগুণে সমৃদ্ধ একটি ফল। এর পুষ্টিগুণ অধিক। এতে রয়েছে দৃঢ় টিস্যু গঠনকারী উপদান যথা আমিষ, ভিটামিন এবং খনিজ। কলা ক্যালরির একটি ভাল উৎস। এতে কঠিন খাদ্য উপাদান এবং সেই সাথে পানি জাতীয় উপাদান সমন্বয় যে কোন তাজা ফলের তুলনায় বেশি। একটি বড় মাপের কলা খেলে ১০০ ক্যালরির বেশি শক্তি পাওয়া যায়। কলাতে রয়েছে সহজে হজমযোগ্য শর্করা। এই শর্করা পরিপাকতন্ত্রকে সহজে হজম করতে সাহায্য করে। কলার মধ্যে থাকা আয়রন রক্তে হিমোগ্লোবিন উত্‍পাদনে সাহায্য করে। গবেষকরা জানান, রক্তচাপ নিয়ন্ত্রণ এবং স্বাভাবিক রক্তপ্রবাহ নিশ্চিত করতে দেহে পটাশিয়ামের উপস্থিতি অত্যন্ত জরুরি। এছাড়াও দে'],
    contributer: ['CONTRIBUTER_ID'],
    scientificName: this.fb.group({
      genus: ['gnus'],
      specificEpithet: ['sometings'],
    }),
    hierarchy: this.fb.group({
      kingdom: ['kingdom'],
      family: ['family'],
      order: ['order'],
      genus: ['genus'],
      species: ['species'],
    }),
    photos: this.fb.array([]),
    reference:['reference.com']
  });

  ngOnInit(): void {
    console.log(TokenService.getToken())
  }
  uploadCoverPhoto(event: any) {
    console.log(event.target.files[0]);

    this.photoService.upload(event.target.files[0]).subscribe((res) => {
      this.coverPhoto.path = res.url;
    });
  }
  submit() {
    this.floraForm.get('photos')!.reset();
    this.photos.push(this.coverPhoto);
    this.photos.forEach((el) => {
      this.floraForm.get('photos')!.value.push({
        isCoverPhoto: el.isCoverPhoto,
        path: el.path,
      });
    });
    //console.log(JSON.stringify(this.floraForm.value))
    this.floraService.postFlora(JSON.stringify(this.floraForm.value)).subscribe(res => {
      this.floraForm.reset();
      this.photos = [];
      
    })
  }

  async uploadPhotos(event: any) {
    let files: File[] = event.target.files;
    for await (const file of files) {
      console.log('loading..');
      this.photoService.upload(file).subscribe((res) => {
        let photo: Photo = {
          isCoverPhoto: false,
          path: res.url,
        };
        let photoFormController = new FormControl();
        this.photos.push(photo);
      });

      console.log('done::' + file.name);
    }
  }

  removeAt(event: any) {
    let index = parseInt(event);
    this.photoService.remove(this.photos[index].path).subscribe((res) => {
      this.photos.splice(index, 1);
    });
  }
  removeCoverPhoto() {
    this.photoService
      .remove(this.coverPhoto.path)
      .subscribe((res) => console.log(res));
    this.coverPhoto.path = '';
  }
}
