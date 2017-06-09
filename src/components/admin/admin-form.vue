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
                        <!--<img src="../../assets/img/qsLogo.jpg" width="50" height="50" style="border-radius:50%;" alt="">-->
                        <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </a>
                </div>
            </div>
        </nav>
        <form action="http://localhost:3030/users/upload" method="POST" enctype="multipart/form-data">
            <div class="menueditImg">
                <input type="file" id="upload" name="photos" multiple>
            </div>
            <input type="submit" value="提交">
        </form>
    
    </div>
</template>
<script>
export default {
    data() {
        return {
            imageUrl: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        };
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
            // var val = $(obj.target).val();
            // console.log(val);

            var self = this;
            var aId = $(obj.target).attr('id');
            var fileObj = document.getElementById(aId).files;
            var formda = new FormData();
            formda.append("file", fileObj[0]);

            // let fileObjLen = fileObj.length;
            // for (let i = 0; i < fileObjLen; i++) {
            //    form.append("file" + i, fileObj[i]);
            // }
            // $.ajax({
            //         url: '/api/users/upload',
            //         type: 'POST',
            //         body:formda,
            //         contentType: false,
            //         processData: false,
            //         success: function (returndata) {
            //             console.log(returndata);
            //         },
            //         error: function (returndata) {
            //             console.log(returndata);
            //         }
            //     });

            $.ajax({
                url: '/api/photos/upload',
                type: 'POST',
                body: formda,
                contentType: false,
                processData: false,
                success: function (returndata) {
                    console.log(returndata);
                },
                error: function (returndata) {
                    console.log(returndata);
                }
            });

            // this.api.upload({
            //   d: form
            // }).then(data => {
            //    console.log(data);
            //   // if (data.code == 200) {
            //   //   console.log(data);
            //   // }
            //   // else {
            //   //   console.log(data);
            //   // }

            // }, err => {
            //   console.log(33);
            // });
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

.menueditImg input[type="file"] {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    opacity: 0;
    filter: alpha(opacity=0);
}
</style>