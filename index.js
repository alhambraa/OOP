class Movie{
  constructor (title, duration, category){
      this.title = title;
      this.duration = duration;
      this.category = category;
  }

  watch(){
      return `Kamu menonton film ${this.title} dengan kategori ${this.category} dan berdurasi ${this.duration}`;
  }

  streamAt(){
      return `Film ${this.title} ditayangkan di Televisi`;
  }
}

let movie = new Movie("Suspicious Partner","60 minutes","Romance");
console.log(movie.watch());

class SoundTrack extends Movie{
  constructor (title, duration, category, titleSong, singer){
      super(title, duration, category);
      this.titleSong = titleSong;
      this.singer = singer;
  }

  movieSoundtrack(){
      return `Film ${this.title} memiliki lagu soundtrack berjudul ${this.titleSong} yang dinyanyikan oleh ${this.singer}`;
  }
}

let movieSoundtrack = new SoundTrack("Suspicious Partner","60 minutes","Romance","How do you feel", "Ridho Majid");
console.log(movieSoundtrack.movieSoundtrack());


class Channel extends Movie{
  constructor (title, duration, category, channelName){
      super(title, duration, category);
      this.channelName = channelName;
  }

  streamAt(){
          return `Film ${this.title} ditayangkan di ${this.channelName}`;
  }

}

console.log(movieSoundtrack.streamAt());
let channel = new Channel("Suspicious Partner","60 minutes","Romance","Netflix");

