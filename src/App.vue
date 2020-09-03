<script>
export default {
	onLaunch: function() {
		console.log("App Launch");
	},
	onShow: function() {
		console.log("App Show");
	},
	onHide: function() {
		console.log("App Hide");
	}
};
</script>

<style lang="scss">
@import './static/styles/uni';

/*每个页面公共css */
.flex {
	display: flex;

	&-inlne {
		display: inline-flex;
	}

	&-column {
		flex-direction: column;
	}
	&-row {
		flex-direction: row;
	}

	&-justify {
		&-start {
			justify-content: flex-start;
		}
		&-end {
			justify-content: flex-end;
		}
		&-center {
			justify-content: center;
		}
		&-between {
			justify-content: space-between;
		}
		&-around {
			justify-content: space-around;
		}
	}

	&-align {
		&-start {
			align-items: flex-start;
		}
		&-end {
			align-items: flex-end;
		}
		&-center {
			align-items: center;
		}
	}

  // 主轴和纵轴都居中
  &-center{
    align-items: center;
    justify-content: center;
  }
}
</style>
