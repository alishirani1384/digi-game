export interface BannerProp {
    name:string
    image: {
        asset: {
            _ref: string;
        }
    }
}
export interface GamesProps{
    banner: {
        asset: {
            _ref: string;
       } 
    }
    description: any[]
    images: any[]
    price: number
    slug: {
       current:string
    } 
    title: string
    video:{
        asset: {
        _ref:any
    }
    }
}
export interface GameProps {
  banner: {
    asset: {
      _ref: string;
    };
  };
  description: any[];
  images: any[];
  price: number;
    title: string;
    video:string
}