<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
    
                </div>
    
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
                        <li><a href="#">Link</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Separated link</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">One more separated link</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="navbar-form navbar-left">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search">
                        </div>
                        <button type="submit" class="btn btn-default">Submit</button>
                    </form>
                    <a class="navbar-brand" href="#" style="padding-top:0;padding-bottom:0;">
                        <div class="head-img-box">
                            <img :src="headPortrait" alt="" class="head-img">
                            <input type="file" class="rep" id="crop" name="crop" multiple @change="uploadImg">
                        </div>
                    </a>
                </div>
            </div>
        </nav>
        <!--<div class="menueditImg">
                <input type="file" id="upload" class="rep" name="file1111" multiple @change="addPhotos($event)">
            </div>-->
        <div class="crop-mask" v-show="isUpLoad">
            <div class="test">
                <vueCropper ref="cropper" :img="option.img" :outputSize="option.size" :outputType="option.outputType" :info="true"></vueCropper>
            </div>
            <div class="text-center">
                <div class="save-btn" @click="startCrop">开始截图</div>
                <div class="save-btn" @click="finish">保存</div>
                <div class="save-btn" @click="cancel">取消</div>
            </div>
    
        </div>
        <!--<div class="menueditImg">
                    <input type="file" class="rep" id="crop" name="crop" multiple @change="uploadImg">
            
                </div>-->
    
    </div>
</template>
<script>
import vueCropper from 'vue-cropper'
export default {
    data() {
        return {
            imageUrl: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
            option: {
                img: '',
                size: 0.8,
                outputType: 'jpeg'
            },
            crap: false,
            headPortrait: 'http://localhost:3030/public/default/head.png',
            isUpLoad: false
        };
    },
    components: {
        vueCropper
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },

        addPhotos(obj) {
            var self = this;
            var aId = $(obj.target).attr('id');
            var fileObj = document.getElementById(aId).files;
            var formda = new FormData();

            let fileObjLen = fileObj.length;
            for (let i = 0; i < fileObjLen; i++) {
                formda.append("file", fileObj[i]);
            }

            console.log('formda:', formda);
            $.ajax({
                url: '/api/users/upload',
                type: 'POST',
                data: formda,
                contentType: false,
                processData: false,
                success: function (returndata) {
                    console.log(returndata);

                },
                error: function (returndata) {
                    console.log(returndata);
                }
            });

        },
        uploadImg(e) {
            //上传头像
            // this.option.img
            var file = e.target.files[0]
            if (!file) return;
            this.isUpLoad = true
            if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
                alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
                return false
            }
            var reader = new FileReader()
            reader.onload = (e) => {
                this.option.img = e.target.result
            }
            reader.readAsDataURL(file)
        },
        startCrop() {
            // 开始截图
            this.crap = true
            this.$refs.cropper.startCrop()
        },
        finish() {
            //截图完成 上传
            let baseInfo = this.$refs.cropper.getCropDate();
            this.isUpLoad = false;
            this.api.headPortrait({
                headPortraitSrc: baseInfo
            }).then(data => {
                console.log(data);
                this.headPortrait = data.src;
                document.getElementById('crop').value = '';
                console.log(data.src);

            }, err => {
                console.log(33);
            });
            // console.log(baseInfo);
        },
        cancel() {
            //取消截图
            this.crap = false
			this.$refs.cropper.stopCrop()
            this.$refs.cropper.clearCrop()
            document.getElementById('crop').value = '';
            this.isUpLoad = false;
        }

    }
}
</script>


<style>
.avatar-uploader .el-upload {
    display: block;
    border: 1px dashed #d9d9d9;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
}

.avatar {
    width: 48px;
    height: 48px;
    display: block;
}

input[type=file].el-upload__input {
    display: none
}

.menueditImg {
    position: relative;
    width: 100px;
    height: 75px;
    background: url(../../assets/img/upload.jpg) no-repeat center;
    cursor: pointer;
    margin: 10px auto;
}

.head-img-box {
    position: relative;
    width: 50px;
    height: 50px;
    cursor: pointer;
}

.head-img-box .head-img {
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
}

input[type="file"].rep {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    opacity: 0;
    filter: alpha(opacity=0);
}

.crop-mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .3);
}

.test {
    width: 200px;
    height: 200px;
    margin: 80px auto 10px;
}

.save-btn {
    display: inline-block;
    font-size: 14px;
    padding: 5px 18px;
    border-radius: 6px;
    background: #FFA900;
    color: #fff;
    cursor: pointer;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
}

.save-btn:hover {
    background: #ff8200;
}
</style>