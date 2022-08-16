import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { Color } from './color';
import { ColorService } from './color.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  colors: Color[] = [];
  selectedColor: Color | null = null;
  displayAll: boolean = true;
  preload: boolean;
  isDeleteMode = false;

  constructor(
    private colorService: ColorService,
    private router: Router,
    private route: ActivatedRoute,
    private alertifyService: AlertifyService
  ) { }

  ngOnInit(): void {
    this.preload = true;
    this.colorService.getColors().subscribe(response => {
      this.colors = response;
      this.preload = false;

      const urlParams = new URLSearchParams(window.location.search);
      const colorId: String = urlParams.get('colorId');
      const dltMode: String = urlParams.get('dltMode');
      if (dltMode && dltMode == "true")
          this.isDeleteMode = true;

      if (colorId == "0") {
        this.selectColor();        
      }
      else if(colorId != null){
        var id=0;

        for (let i = 0; i < this.colors.length; i++) {
          const category = this.colors[i];
          if (category.id == colorId){
            id = i;
            break;
          }
        };

        this.selectColor(this.colors[Number(id)]);
      }
    });
  }

  selectColor(color?: Color) {
    if (color) {
      this.selectedColor = color;
      this.displayAll = false;
    } else {
      this.selectedColor = null;
      this.displayAll = true;
    }
  }

  reloadAllComponent(route?: string){
    setTimeout(() => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = "reload";
      this.router.navigate([route ? route : "/products"], {
        relativeTo: this.route,
        queryParamsHandling: "merge"
      });
    }, 10);
  }

  allDelete(){
    this.colorService.deleteColor(null).subscribe(response => {
      this.reloadAllComponent("/colors");
      this.alertifyService.warning('All colors deleted');
    });
  }

  deleteBrand(color: Color){
    this.colorService.deleteColor(color.id).subscribe(response => {
      this.reloadAllComponent("/colors");
      this.alertifyService.warning(color.name + ' deleted');
    });
  }
}
