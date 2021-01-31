import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  $: any = $;
  data: any = [];
  id: any = new Date().getTime();
  selectedId:any = null;

  constructor(private globalService: GlobalService) {
  }

  ngOnInit() {
    this.loadData();
    //this.showContextMenu();
  }

  loadData() {
    this.globalService.get("account/trees").subscribe((res: any) =>{
      this.initTree(res);
    });
  }

  initTree(data) {
    let self = this;
    setTimeout(() =>{
      self.$('.jstree').jstree({ 'core' : {
        'data' : data
      }});

      self.$('.jstree').on('select_node.jstree',function(e,node){
        self.selectedId = node.selected[0];
        console.log(node.selected[0]);
      });
    }, 200);
  }

  create() {
    var ref = this.$('.jstree').jstree(true),
    sel = ref.get_selected();
    console.log(sel);
    if (!sel.length) { return false; }
    sel = sel[0];
    sel = ref.create_node(sel, {text: "fdssf", "type":"default"});
    if (sel) {
      ref.edit(sel);
    }
  }

  showContextMenu(ev) {
    var self = this;
    ev.preventDefault();
    console.log(ev);
    this.$('.context-menu-'+this.id).hide();
    this.$('.context-menu-'+this.id).css('left', (ev.clientX - 150)+ "px");
    this.$('.context-menu-'+this.id).css('top', (ev.clientY - 50) + "px");
    this.$('.context-menu-'+this.id).slideDown(200);
    return false;
  }

  hideContextMenu() {
    this.$('.context-menu-'+this.id).hide();
  }

}
